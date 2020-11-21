import { CLIENT_ID_PROD, SCOPE, REDIRECT_ID_PROD, PROMPT } from "../../../client/constants";
import {
  AUTH_EBAY_CONSENT_REQUEST,
  AUTH_EBAY_REQUEST,
  AUTH_EBAY_SUCCESS,
  AUTH_EBAY_FAIL,
  AUTH_EBAY_RESET,
  LOAD_EBAY_SUPER_CATEGORIES_REQUEST,
  LOAD_EBAY_SUPER_CATEGORIES_SUCCESS,
  LOAD_EBAY_SUPER_CATEGORIES_CARDS_SUCCESS,
  LOAD_EBAY_SUPER_CATEGORIES_FAIL,
  LOAD_EBAY_ITEMS_CAROUSEL_REQUEST,
  LOAD_EBAY_ITEMS_CAROUSEL_SUCCESS,
  LOAD_EBAY_ITEMS_CAROUSEL_FAIL
} from "../constants/ebayConstants";

// CREAMOS LA URL PARA REDIRECCIONAR A LA PAGINA DE CONSENTIMIENTO DEL USER EN EBAY
const consentUrl = `https://auth.ebay.com/oauth2/consents?client_id=${CLIENT_ID_PROD}&redirect_uri=${REDIRECT_ID_PROD}&response_type=code&scope=${SCOPE}&prompt=${PROMPT}`;

export const authEbayReducer = (
  state = { consentUrl, redirectId_prod: REDIRECT_ID_PROD },
  action
) => {
  switch (action.type) {
    case AUTH_EBAY_CONSENT_REQUEST:
      return {
        loading: true,
        redirectId_prod: REDIRECT_ID_PROD,
        consentUrl,
      };
    default:
      return state;
  }
};

export const authEbayAccessReducer = (state = {code: ""}, action) => {
  switch (action.type) {
      case AUTH_EBAY_REQUEST:
          return {
            loading: true
          };
    case AUTH_EBAY_SUCCESS:
        return{
            loading: true,
            authToken: action.payload
        };
    case AUTH_EBAY_FAIL:
        return{
            loading: false,
            error: action.payload
        };
    case AUTH_EBAY_RESET:
      return {
        loading: false,
        authToken: ""
      }
     default:
         return state;
          
  }
};

export const loadEbaySuperCategoriesReducer = (state = {categoriesCards: []}, action) => {
  switch(action.type){
    case LOAD_EBAY_SUPER_CATEGORIES_REQUEST:
      return {
        loading: true,
      }
    case LOAD_EBAY_SUPER_CATEGORIES_SUCCESS:
      return {
        loading: true,
        superCategories: action.payload
      }
    case LOAD_EBAY_SUPER_CATEGORIES_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        categoriesCards: action.payload
      }
    case LOAD_EBAY_SUPER_CATEGORIES_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export const loadEbayItemsCarouselReducer = (state = {itemsCarousel: {}}, action) => {
  switch(action.type){
    case LOAD_EBAY_ITEMS_CAROUSEL_REQUEST:
      return {
        loading: true
      }
    case LOAD_EBAY_ITEMS_CAROUSEL_SUCCESS:
      return {
        loading: false,
        itemsCarousel: action.payload
      }
    case LOAD_EBAY_ITEMS_CAROUSEL_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}
