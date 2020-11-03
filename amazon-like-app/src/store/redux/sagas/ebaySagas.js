import {
  AUTH_EBAY_REQUEST,
  AUTH_EBAY_SUCCESS,
  AUTH_EBAY_FAIL,
} from "../constants/ebayConstants";
import { put } from 'redux-saga/effects';
import axios from 'axios';

const ebayClientId = "PedroMar-myamazon-SBX-87cf12021-46a66edc";
const ebayClientSecret = "SBX-7cf120211133-04b3-4965-ac62-b1cf";
const encodedCredentials = btoa(ebayClientId.concat(":").concat(ebayClientSecret));
const scopeList = "https://auth.sandbox.ebay.com/oauth2/authorize?client_id=PedroMar-myamazon-SBX-87cf12021-46a66edc&response_type=code&redirect_uri=Pedro_Martinez-PedroMar-myamaz-hlemvy&scope=https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/buy.order.readonly https://api.ebay.com/oauth/api_scope/buy.guest.order https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing https://api.ebay.com/oauth/api_scope/sell.inventory.readonly https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/sell.account.readonly https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.analytics.readonly https://api.ebay.com/oauth/api_scope/sell.marketplace.insights.readonly https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly https://api.ebay.com/oauth/api_scope/buy.shopping.cart https://api.ebay.com/oauth/api_scope/buy.offer.auction https://api.ebay.com/oauth/api_scope/commerce.identity.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.email.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.phone.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.address.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.name.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.status.readonly https://api.ebay.com/oauth/api_scope/sell.finances https://api.ebay.com/oauth/api_scope/sell.item.draft https://api.ebay.com/oauth/api_scope/sell.payment.dispute https://api.ebay.com/oauth/api_scope/sell.item";


export function* authEbaySaga(action){
    yield put({type: AUTH_EBAY_REQUEST});
    console.log("scope encoded >>>",encodeURIComponent(scopeList));
    console.log("encodedCredentials >>>", encodedCredentials);
    try{
        const response = yield axios.post(`https://api.sandbox.ebay.com/identity/v1/oauth2/token`, 
        
            {
                grant_type: "client_credentials",
                scope: encodeURI(scopeList)
            },
            {
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${encodedCredentials}`
                }
            }
        
        );
        console.log('response',response);

        yield put({type: AUTH_EBAY_SUCCESS, authToken: ""});


    }catch(error){
        yield put({type: AUTH_EBAY_FAIL});
    }
} 

