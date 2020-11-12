


class EbayClient{

    static getCategoriesOperation(args){
        const url = "https://api.ebay.com/ws/api.dll";
        const headers = {
            "X-EBAY-API-SITEID" : 0,
            "X-EBAY-API-COMPATIBILITY-LEVEL": 967,
            "X-EBAY-API-CALL-NAME" : "GetCategories",
            "X-EBAY-API-IAF-TOKEN" : args.authToken
        }
        const body = {
            WarningLevel: args.body.warningLevel,
            DetailLevel: args.body.detailLevel,
            ViewAllNodes: args.body.viewAllNodes
        }
    }


}

export default EbayClient;
