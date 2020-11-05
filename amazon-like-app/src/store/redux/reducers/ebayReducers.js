import { AUTH_EBAY_CONSENT_REQUEST } from '../constants/ebayConstants';


// CREAMOS LA URL PARA REDIRECCIONAR A LA PAGINA DE CONSENTIMIENTO DEL USER EN EBAY
const clientId = "PedroMar-myamazon-SBX-87cf12021-46a66edc";
const redirectId = "Pedro_Martinez-PedroMar-myamaz-hlemvy";//RuName
const scope = encodeURIComponent("https://api.ebay.com/oauth/api_scope/buy.order.readonly");
const state = "";
const prompt = "login";
const consentUrl = `https://auth.sandbox.ebay.com/oauth2/consents?client_id=${clientId}&redirect_uri=${redirectId}&response_type=code&scope=${scope}&prompt=${prompt}`;


export const authEbayReducer = (state = {consentUrl}, action) => {
    switch(action.type){
        case AUTH_EBAY_CONSENT_REQUEST:
            return {
                loading: true,
                redirectId
            }
        default:
            return state;
    }
};