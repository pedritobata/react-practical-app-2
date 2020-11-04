import {
 
  AUTH_EBAY_REQUEST,
  AUTH_EBAY_SUCCESS,
  AUTH_EBAY_FAIL,
} from "../constants/ebayConstants";
import { put } from "redux-saga/effects";
import axios from "axios";

// DATA DE EBAY PARA SOLICITAR TOKEN DE ACCESSO A NIVEL APP
const ebayClientId = "PedroMar-myamazon-SBX-87cf12021-46a66edc";
const ebayClientSecret = "SBX-7cf120211133-04b3-4965-ac62-b1cf";
const encodedCredentials = btoa(
  ebayClientId.concat(":").concat(ebayClientSecret)
);

const scopeList =
  "https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/buy.order.readonly https://api.ebay.com/oauth/api_scope/buy.guest.order https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing https://api.ebay.com/oauth/api_scope/sell.inventory.readonly https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/sell.account.readonly https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.analytics.readonly https://api.ebay.com/oauth/api_scope/sell.marketplace.insights.readonly https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly https://api.ebay.com/oauth/api_scope/buy.shopping.cart https://api.ebay.com/oauth/api_scope/buy.offer.auction https://api.ebay.com/oauth/api_scope/commerce.identity.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.email.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.phone.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.address.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.name.readonly https://api.ebay.com/oauth/api_scope/commerce.identity.status.readonly https://api.ebay.com/oauth/api_scope/sell.finances https://api.ebay.com/oauth/api_scope/sell.item.draft https://api.ebay.com/oauth/api_scope/sell.payment.dispute https://api.ebay.com/oauth/api_scope/sell.item";

const testSingleScope = "https://api.ebay.com/oauth/api_scope";

const myFirstToken =
  "v^1.1#i^1#f^0#r^0#I^3#p^3#t^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";




// ASK FOR USER ACCESS TOKEN
export function* authEbaySaga(action) {
  yield put({ type: AUTH_EBAY_REQUEST });
  console.log("scope encoded >>>", encodeURIComponent(testSingleScope));
  console.log("encodedCredentials >>>", encodedCredentials);
  try {
    const response = yield axios.post(
      `https://api.sandbox.ebay.com/identity/v1/oauth2/token`,

      {
        grant_type: "client_credentials",
        scope: encodeURI(scopeList),
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    );
    console.log("response", response);

    yield put({ type: AUTH_EBAY_SUCCESS, authToken: "" });
  } catch (error) {
    yield put({ type: AUTH_EBAY_FAIL });
  }
}
