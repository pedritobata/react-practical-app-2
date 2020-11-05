const functions = require('firebase-functions');
const axios = require("axios");
const dotenv = require('dotenv');
const morgan = require("morgan");

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')
('sk_test_51HWYMCI4jQHDtBggEC9fAwUEqjRIlhi3JWmQiOZ7zpjrm0htNRjJD7Jn8YbtWDdnB1GPJAYMhkP8SkowDg1J1yL100mxGWLseL');//secret

const app = express();

app.use(cors({origin: true}));
app.use(express.json());
dotenv.config();
app.use(morgan('tiny'));


//routes
app.get("/", (req,res)=> {
    res.status(200).send("Hello World!! Firebase function");
})

app.get("/token", async (req,res) => {
    const buffer = new Buffer(process.env.EBAY_CLIENT_ID.concat(":").concat(process.env.EBAY_CLIENT_SECRET));
    const encodedCredentials = buffer.toString('base64');
    console.log("req.query",req.query);
    console.log("encodedCredentials",encodedCredentials);
    try {
        const response = await axios.post(
          `https://api.sandbox.ebay.com/identity/v1/oauth2/token`,
    
          {
            grant_type: "authorization_code",
            "redirect_uri" : req.query.redirectUri,
            code: "v^1.1#i^1#f^0#I^3#p^3#r^1#t^Ul41Xzk6OEQ4ODI4NTVBQUNGQ0U4QTFEQUNDNEZGMzY4QjIyNTdfMF8xI0VeMTI4NA=="
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Basic ${encodedCredentials}`,
              "Access-Control-Allow-Origin": "*"
            },
          }
        );
        console.log("response", response.data);
    
       
      } catch (error) {

        console.log("Error response>>", error.response && error.response.data);
        res.json(error.response);
        //console.log("Error request>>", error.request);
      }
    
});


app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    console.log("Total received from client >>>", total);

    res.status(201).send({clientSecret: paymentIntent.client_secret});
});

//listen 
exports.api = functions.https.onRequest(app);