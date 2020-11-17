import {
 
  AUTH_EBAY_REQUEST,
  AUTH_EBAY_SUCCESS,
  AUTH_EBAY_FAIL,
  LOAD_EBAY_SUPER_CATEGORIES_CARDS_SUCCESS,
  LOAD_EBAY_SUPER_CATEGORIES_REQUEST,
  LOAD_EBAY_SUPER_CATEGORIES_SUCCESS,
  LOAD_EBAY_SUPER_CATEGORIES_FAIL
} from "../constants/ebayConstants";
import { MAX_NUMBER_OF_CARD_CATEGORIES, MAX_NUMBER_OF_CAROUSEL_CATEGORIES } from '../../../client/constants';
import { loadEbaySuperCategories } from '../actions/ebayActions';
import { put,select } from "redux-saga/effects";
import axios from "axios";
import EbayClient from '../../../client/ebay';
import { parseEbayXmlResponse } from '../../../utils/JsonXmlParser';
import { generateRandomNumbersBetween } from '../../../utils/utils';
import { db } from '../../../firebase';


// ASK FOR USER ACCESS TOKEN
export function* authEbaySaga(action) {
  yield put({ type: AUTH_EBAY_REQUEST });
  const {redirectId_prod} = yield select(state => state.authEbay);
  
  try {
    const response = yield axios.get(
      `http://localhost:5001/like-app-94bda/us-central1/api/token`,

      {
        params: {
          redirectUri: redirectId_prod,
          code: action.authCode
        }
    }
      
    );
    console.log("response", response);

    yield put({ type: AUTH_EBAY_SUCCESS, payload: response.data.access_token });
    localStorage.setItem("authToken", response.data.access_token);
    yield put(loadEbaySuperCategories(response.data.access_token));

  } catch (error) {
    console.log("Error response>>", error.response?.data);
    console.log("Error request>>", error.request);
    yield put({ type: AUTH_EBAY_FAIL, payload: error });
  }
}

export function* loadEbaySuperCategoriesSaga(action){
  yield put({type: LOAD_EBAY_SUPER_CATEGORIES_REQUEST});
  try{
    const categoriesResponse = yield EbayClient.getCategoriesByLevelOperation(action.token, 1);
    const parsedCategoriesResponse = parseEbayXmlResponse(categoriesResponse);
    if(parsedCategoriesResponse.GetCategoriesResponse.Ack === "Failure"){
      throw new Error("Unable to load Super Categories");
    }
    const superCategories = parsedCategoriesResponse.GetCategoriesResponse.CategoryArray.Category;
    //Obtenemos las urls de las imagenes pre guardadas en firestore para la supercategorias de Ebay
    const superCategoriesImagesResponse = yield db.collection("superCategories").get();
    const superCategoriesImages = Array.from(superCategoriesImagesResponse).reduce((acc, curr) => {
      console.log("curr",curr);
      return Object.assign(acc, {[curr.data().categoryId]: curr.data().imageUrl});
     
    }, {});
    console.log("superCategoriesImages", superCategoriesImages);
    //Escogemos 9 categorias al azar y las guardamos en el store con sus imagenes
    const pickedSuperCategories = 
    generateRandomNumbersBetween(0, superCategories.length, MAX_NUMBER_OF_CARD_CATEGORIES + MAX_NUMBER_OF_CAROUSEL_CATEGORIES)
    .map(index => {
      return {
        categoryId: superCategories[index].CategoryID,
        name: superCategories[index].CategoryName,
        image: superCategoriesImages[superCategories[index].CategoryID]
      }
    });
    
    console.log("pickedSuperCategories",pickedSuperCategories);
    yield put({type: LOAD_EBAY_SUPER_CATEGORIES_SUCCESS, 
      payload: pickedSuperCategories});






      
      //Obteniendo un producto representativo de cada super categoría
      const itemsByCategoryRawFirst3 = yield EbayClient.getItemsByCategoryId(
        pickedSuperCategories.slice(0,3).map(cat => cat.categoryId),
        3
      );
      console.log("itemsByCategoryRawFirst3",itemsByCategoryRawFirst3);
      const itemsByCategoryFirst3 = parseEbayXmlResponse(itemsByCategoryRawFirst3).findItemsByCategoryResponse.searchResult.item;
      console.log("itemsByCategoryFirst3",
      itemsByCategoryFirst3
      );
      yield put({type: LOAD_EBAY_SUPER_CATEGORIES_CARDS_SUCCESS, 
        payload: ''});

  }catch(error){
    yield put({type: LOAD_EBAY_SUPER_CATEGORIES_FAIL, payload: error});
    console.log(error);
  }

}
