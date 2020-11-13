import {
 
  AUTH_EBAY_REQUEST,
  AUTH_EBAY_SUCCESS,
  AUTH_EBAY_FAIL,
  LOAD_EBAY_SUPER_CATEGORIES,
  LOAD_EBAY_SUPER_CATEGORIES_REQUEST,
  LOAD_EBAY_SUPER_CATEGORIES_SUCCESS,
  LOAD_EBAY_SUPER_CATEGORIES_FAIL
} from "../constants/ebayConstants";
import { loadEbaySuperCategories } from '../actions/ebayActions';
import { put,select } from "redux-saga/effects";
import axios from "axios";
import EbayClient from '../../../client/ebay';


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
    console.log("Error response>>", error.response.data);
    console.log("Error request>>", error.request);
    yield put({ type: AUTH_EBAY_FAIL, payload: error });
  }
}

export function* loadEbaySuperCategoriesSaga(action){
  yield put({type: LOAD_EBAY_SUPER_CATEGORIES_REQUEST});
  try{
    console.log("loadEbaySuperCategoriesSaga");
    const categories = yield EbayClient.getCategoriesByLevelOperation({authToken: action.token, level: 1});

  }catch(error){

  }

}
