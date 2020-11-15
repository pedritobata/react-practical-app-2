import xml2js from "xml2js";

const xmlBuilder = new xml2js.Builder();
const jsonParser = new xml2js.Parser({explicitArray: false});

const commonHeader = `<?xml version="1.0" encoding="utf-8"?>`;

export const buildEbayXmlRequest = async (operation, namespace, jsonBody) => {
    const obj = {
        [operation]: {
            $: {
                "xmlns": namespace
            },
            ...jsonBody
        }
    }
    const xmlRequest = await xmlBuilder.buildObject(obj);
    return xmlRequest;
}

export const parseEbayXmlResponse = (response) => {
    //console.log("response XML:", response.data);
    let result = "";
     jsonParser.parseString(response.data, function (err, resp) {
        //console.log("Parsed Response >>>",resp);
        result = resp;
    });
    return result;
}