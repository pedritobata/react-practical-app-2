import axios from "axios";
import { buildEbayXmlRequest } from "../utils/JsonXmlParser";
import { CLIENT_ID_PROD } from './constants';

class EbayClient {

  static corsHeader = "https://cors-anywhere.herokuapp.com/";


  static async getCategoriesByLevelOperation(token, level) {
    const url = "https://api.ebay.com/ws/api.dll";
    const headers = {
      "X-EBAY-API-SITEID": '0',
      "X-EBAY-API-COMPATIBILITY-LEVEL": '967',
      "X-EBAY-API-CALL-NAME": "GetCategories",
      "X-EBAY-API-IAF-TOKEN": token + '',
       'Content-Type': 'application/xml',
      'Access-Control-Allow-Origin' : "*"
    };
    const body = {
      ErrorLanguage: "en_US",
      WarningLevel: "High",
      DetailLevel: "ReturnAll",
      ViewAllNodes: "true",
      LevelLimit: level,
    };
    

   const xmlBody = await buildEbayXmlRequest("GetCategoriesRequest","urn:ebay:apis:eBLBaseComponents",body) ;
    
    console.log("xmlBody >>>", xmlBody);
    return axios.post(
      this.corsHeader + url,
      xmlBody,
      {headers: headers}
    );
    
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.open("POST",corsHeader + url,true);
// xmlhttp.setRequestHeader('Content-Type', 'application/xml');
// xmlhttp.setRequestHeader('charset', 'UTF-8');
// xmlhttp.send(xmlBody);
// console.log("Response", xmlhttp.response)
  }


  static async getItemsByCategoryId(categoryId, entriesPerPage){
    const url = `https://svcs.ebay.com/services/search/FindingService/v1`;
    const headers = {
      "X-EBAY-SOA-SECURITY-APPNAME": CLIENT_ID_PROD,
      "X-EBAY-SOA-OPERATION-NAME": "findItemsByCategory"
    };
    console.log("categoryId",categoryId);
    const body = {
      categoryId: categoryId,
      // "categoryId": categoryIdArray[1],
      // "categoryId": categoryIdArray[2],
      paginationInput: {
        entriesPerPage: entriesPerPage
      }
    };


    const xmlBody = await buildEbayXmlRequest("findItemsByCategoryRequest","http://www.ebay.com/marketplace/search/v1/services",body) ;
    
    console.log("xmlBody >>>", xmlBody);
    return await axios.post(
      this.corsHeader + url,
      xmlBody,
      {headers: headers}
    );

  }



  
}

export default EbayClient;
