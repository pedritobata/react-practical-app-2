import axios from "axios";
import { buildEbayXmlRequest } from "../utils/JsonXmlParser";

class EbayClient {
  static getCategoriesByLevelOperation(args) {
    const url = "https://api.ebay.com/ws/api.dll";
    const headers = {
      "X-EBAY-API-SITEID": 0,
      "X-EBAY-API-COMPATIBILITY-LEVEL": 967,
      "X-EBAY-API-CALL-NAME": "GetCategories",
      "X-EBAY-API-IAF-TOKEN": args.authToken,
    };
    const body = {
      ErrorLanguage: "en_US",
      WarningLevel: "High",
      DetailLevel: "ReturnAll",
      ViewAllNodes: "true",
      LevelLimit: args.level,
    };
    console.log(
      "buildEbayXmlRequest(body)",
      buildEbayXmlRequest(
        "GetCategoriesRequest",
        "urn:ebay:apis:eBLBaseComponents",
        body
      )
    );
    //return axios.post(url,buildEbayXmlRequest(body) ,{headers});
  }
}

export default EbayClient;
