const functions = require("firebase-functions");
const axios = require("axios");
const dotenv = require("dotenv");
const morgan = require("morgan");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HWYMCI4jQHDtBggEC9fAwUEqjRIlhi3JWmQiOZ7zpjrm0htNRjJD7Jn8YbtWDdnB1GPJAYMhkP8SkowDg1J1yL100mxGWLseL"
); //secret

const app = express();

app.use(express.json());
dotenv.config();
app.use(morgan("tiny"));
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World!! Firebase function");
});

app.get("/token", async (req, res) => {
  const buffer = new Buffer(
    process.env.EBAY_CLIENT_ID_PROD.concat(":").concat(
      process.env.EBAY_CLIENT_SECRET_PROD
    )
  );
  const encodedCredentials = buffer.toString("base64");
  const authCode = req.url.split("&").find(el => el.includes("code")).split("=")[1];
  console.log("authCode >>>", authCode);
  console.log("encodedCredentials", encodedCredentials);
  try {
    //***** RARISIMO!!!! para que funcione la API de ebay hay que mandarle los parametros en
    // la URL como query params Y TAMBIEN EN EL BODY DEL REQUEST como data
    //console.log("encode scopes >>>", encodeURIComponent("https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/buy.order.readonly"));
    const response = await axios.post(
      `https://api.ebay.com/identity/v1/oauth2/token?grant_type=authorization_code&redirect_uri=${req.query.redirectUri}&code=${authCode}`,
      JSON.stringify({
        grant_type: "authorization_code",
        redirect_uri: req.query.redirectUri,
        code:  authCode,
        scope: encodeURIComponent("https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/sell.marketing.readonly https://api.ebay.com/oauth/api_scope/sell.marketing https://api.ebay.com/oauth/api_scope/sell.inventory.readonly https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/sell.account.readonly https://api.ebay.com/oauth/api_scope/sell.account https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly https://api.ebay.com/oauth/api_scope/sell.fulfillment https://api.ebay.com/oauth/api_scope/sell.analytics.readonly https://api.ebay.com/oauth/api_scope/sell.finances https://api.ebay.com/oauth/api_scope/sell.payment.dispute https://api.ebay.com/oauth/api_scope/commerce.identity.readonly")
      }),
      {
        headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${encodedCredentials}`,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control" : "no-cache"
      },
      transformRequest: [function (data, headers) {
        // console.log("REQUEST FROM AXIOS DATA:", data);
        // console.log("REQUEST FROM AXIOS HEADERS:", headers);
     
        return data.toString();
      }],
    }
    );
    // console.log("response", response.data);
    res.json(response.data);
  } catch (error) {
    // console.log("Error response>>", error.response && error.response.data);
    // console.log("Error request>>", error.request);
    //console.log("Error>>", error);
    res.json(error.response);
    //console.log("Error request>>", error.request);
  }
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  console.log("Total received from client >>>", total);

  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

//listen
exports.api = functions.https.onRequest(app);
