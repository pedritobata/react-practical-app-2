import {
 
  AUTH_EBAY_REQUEST,
  AUTH_EBAY_SUCCESS,
  AUTH_EBAY_FAIL,
  LOAD_EBAY_SUPER_CATEGORIES_CARDS_SUCCESS,
  LOAD_EBAY_SUPER_CATEGORIES_REQUEST,
  LOAD_EBAY_SUPER_CATEGORIES_SUCCESS,
  LOAD_EBAY_SUPER_CATEGORIES_FAIL
} from "../constants/ebayConstants";
import { loadEbaySuperCategories } from '../actions/ebayActions';
import { put,select } from "redux-saga/effects";
import axios from "axios";
import EbayClient from '../../../client/ebay';
import { parseEbayXmlResponse } from '../../../utils/JsonXmlParser';
import { generateRandomNumbersBetween } from '../../../utils/utils';


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
    //Escogemos 9 categorias al azar y las guardamos en el store
    const pickedSuperCategories = 
    generateRandomNumbersBetween(0, superCategories.length, 9)
    .map(index => {
      return {
        categoryId: superCategories[index].CategoryID,
        name: superCategories[index].CategoryName
      }
    });
    
    yield put({type: LOAD_EBAY_SUPER_CATEGORIES_SUCCESS, 
      payload: pickedSuperCategories});
      
      console.log("pickedSuperCategories",pickedSuperCategories);
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
