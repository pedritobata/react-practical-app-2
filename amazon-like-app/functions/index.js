const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')
('sk_test_51HWYMCI4jQHDtBggEC9fAwUEqjRIlhi3JWmQiOZ7zpjrm0htNRjJD7Jn8YbtWDdnB1GPJAYMhkP8SkowDg1J1yL100mxGWLseL');//secret

const app = express();

app.use(cors({origin: true}));
app.use(express.json());


//routes
app.get("/", (req,res)=> {
    res.status(200).send("Hello World!!");
})

//listen 
exports.api = functions.https.onRequest(app);