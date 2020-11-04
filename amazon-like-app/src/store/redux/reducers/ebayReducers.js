import { AUTH_EBAY_CONSENT_REQUEST } from '../constants/ebayConstants';


// CREAMOS LA URL PARA REDIRECCIONAR A LA PAGINA DE CONSENTIMIENTO DEL USER EN EBAY
const clientId = "PedroMar-myamazon-SBX-87cf12021-46a66edc";
const redirectId = "Pedro_Martinez-PedroMar-myamaz-hlemvy";//RuName
const responseType = "code";
const scope = "https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope";
const state = "";
const prompt = "login";
const consentUrl = `https://auth.sandbox.ebay.com/oauth2/consents?client_id=${clientId}&redirect_uri=${redirectId}&response_type=code&scope=${scope}&prompt=${prompt}`;
console.log("consentUrl",consentUrl);

//firme:  https://auth.sandbox.ebay.com/oauth2/consents?client_id=PedroMar-myamazon-SBX-87cf12021-46a66edc&redirect_uri=Pedro_Martinez-PedroMar-myamaz-hlemvy&scope=https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fbuy.order.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fbuy.guest.order+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.marketing.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.marketing+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.inventory.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.inventory+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.account.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.account+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.fulfillment.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.fulfillment+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.analytics.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.marketplace.insights.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fcommerce.catalog.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fbuy.shopping.cart+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fbuy.offer.auction+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fcommerce.identity.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fcommerce.identity.email.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fcommerce.identity.phone.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fcommerce.identity.address.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fcommerce.identity.name.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fcommerce.identity.status.readonly+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.finances+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.item.draft+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.payment.dispute+https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fsell.item&state&response_type=code&hd&consentGiven=false
//la primera q no funcó:  https://auth.sandbox.ebay.com/oauth2/authorize?client_id=PedroMar-myamazon-SBX-87cf12021-46a66edc&redirect_uri=Pedro_Martinez-PedroMar-myamaz-hlemvy My Amazon clone App&response_type=code&scope=https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope&prompt=login

export const authEbayReducer = (state = {consentUrl}, action) => {
    switch(action.type){
        case AUTH_EBAY_CONSENT_REQUEST:
            return {
                loading: true,
            }
        default:
            return state;
    }
};