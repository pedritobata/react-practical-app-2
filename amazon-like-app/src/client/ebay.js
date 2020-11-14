import axios from "axios";
import { buildEbayXmlRequest } from "../utils/JsonXmlParser";

class EbayClient {


  static async getCategoriesByLevelOperation(args) {
    const url = "https://api.ebay.com/ws/api.dll";
    const headers = {
      "X-EBAY-API-SITEID": '0',
      "X-EBAY-API-COMPATIBILITY-LEVEL": '967',
      "X-EBAY-API-CALL-NAME": "GetCategories",
      "X-EBAY-API-IAF-TOKEN": args.authToken + '',
       'Content-Type': 'application/xml',
      'Access-Control-Allow-Origin' : "*"
    };
    const body = {
      ErrorLanguage: "en_US",
      WarningLevel: "High",
      DetailLevel: "ReturnAll",
      ViewAllNodes: "true",
      LevelLimit: args.level,
    };
    const corsHeader = "https://cors-anywhere.herokuapp.com/";

   const xmlBody = await buildEbayXmlRequest("GetCategoriesRequest","urn:ebay:apis:eBLBaseComponents",body) ;
    //const xmlBody = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<GetCategoriesRequest xmlns="urn:ebay:apis:eBLBaseComponents">\n  <ErrorLanguage>en_US</ErrorLanguage>\n  <WarningLevel>High</WarningLevel>\n  <DetailLevel>ReturnAll</DetailLevel>\n  <ViewAllNodes>true</ViewAllNodes>\n  <LevelLimit>1</LevelLimit>\n</GetCategoriesRequest>';
    
    console.log("xmlBody >>>", xmlBody);
    return axios.post(
      corsHeader + url,
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

  
}

export default EbayClient;
