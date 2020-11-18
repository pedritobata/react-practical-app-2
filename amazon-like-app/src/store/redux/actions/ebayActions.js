import { AUTH_EBAY, AUTH_EBAY_CONSENT_REQUEST, LOAD_EBAY_SUPER_CATEGORIES, LOAD_EBAY_ITEMS_CAROUSEL } from '../constants/ebayConstants';


export const authEbayConsentRequest = () => {
    return {
        type: AUTH_EBAY_CONSENT_REQUEST
    }
}


export const authEbay = (authCode) => {
    return {
        type: AUTH_EBAY,
        authCode
    }
}

export const loadEbaySuperCategories = (token) => {
    return {
        type: LOAD_EBAY_SUPER_CATEGORIES,
        token,
        
    }
}

export const loadEbayItemsCarousel = () => {
    return {
        type: LOAD_EBAY_ITEMS_CAROUSEL
    }
}



