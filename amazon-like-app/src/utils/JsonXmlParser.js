import xml2js from "xml2js";

const xmlBuilder = new xml2js.Builder();

const commonHeader = `<?xml version="1.0" encoding="utf-8"?>`;

export const buildEbayXmlRequest = async (operation, namespace, jsonBody) => {
    const xmlRequest = await xmlBuilder.buildObject(jsonBody);
    console.log("xmlRequest",xmlRequest);

}