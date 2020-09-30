const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const { withTheme } = require('@material-ui/core');
const stripe = require('stripe')
('sk_test_51HWYMCI4jQHDtBggEC9fAwUEqjRIlhi3JWmQiOZ7zpjrm0htNRjJD7Jn8YbtWDdnB1GPJAYMhkP8SkowDg1J1yL100mxGWLseL');//secret

const app = express();

app.use(cors({origin: true}));
app.use(express.json());


//routes
app.get("/", (req,res)=> {
    res.status(200).send("Hello World!!");
})

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