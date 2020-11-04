import { AUTH_EBAY, AUTH_EBAY_CONSENT_REQUEST } from '../constants/ebayConstants';


export const authEbayConsentRequest = () => {
    return {
        type: AUTH_EBAY_CONSENT_REQUEST
    }
}


export const authEbay = () => {
    return {
        type: AUTH_EBAY
    }
}