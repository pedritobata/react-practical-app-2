import {
  AUTH_EBAY_CONSENT_REQUEST,
  AUTH_EBAY_REQUEST,
  AUTH_EBAY_SUCCESS,
  AUTH_EBAY_FAIL,
} from "../constants/ebayConstants";

// CREAMOS LA URL PARA REDIRECCIONAR A LA PAGINA DE CONSENTIMIENTO DEL USER EN EBAY
const clientId = "PedroMar-myamazon-SBX-87cf12021-46a66edc";
const clientId_prod = "PedroMar-myamazon-PRD-27a727799-eba6a00b";
const redirectId = "Pedro_Martinez-PedroMar-myamaz-hlemvy"; //RuName
const redirectId_prod = "Pedro_Martinez-PedroMar-myamaz-wpssjlmv";
const scope = encodeURIComponent(
  "https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing https://api.ebay.com/oauth/api_scope/sell.inventory.readonly https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/sell.account.readonly https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.analytics.readonly https://api.ebay.com/oauth/api_scope/sell.finances https://api.ebay.com/oauth/api_scope/sell.payment.dispute https://api.ebay.com/oauth/api_scope/commerce.identity.readonly"
);
const state = "";
const prompt = "login";
const consentUrl = `https://auth.ebay.com/oauth2/consents?client_id=${clientId_prod}&redirect_uri=${redirectId_prod}&response_type=code&scope=${scope}&prompt=${prompt}`;

export const authEbayReducer = (
  state = { consentUrl, redirectId_prod },
  action
) => {
  switch (action.type) {
    case AUTH_EBAY_CONSENT_REQUEST:
      return {
        loading: true,
        redirectId_prod,
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
     default:
         return state;
          
  }
};
