const express = require('express');
const mongoose = require('mongoose');
const Message = require('./dbMessages');
const Pusher = require('pusher');

const app = express();
const port = process.env.port || 9000;

const pusher = new Pusher({
    appId: '1075748',
    key: '874721245a770c40496a',
    secret: 'a68720f2c7ea09d5fe32',
    cluster: 'us2',
    encrypted: true
  });
  

// mongo
const stringConnection = 'mongodb+srv://admin:75aZPmRgLAX5n0IL@cluster0.gryv1.mongodb.net/whatsapp-clone-backend?retryWrites=true&w=majority';
mongoose.connect(stringConnection, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once("open", () => {
    console.log("Connected to DB...");
    const messagesCollection = db.collection("messagecontents");
    const changeStream = messagesCollection.watch();
    changeStream.on("change", change => {
        console.log("A change has been produced", change);
        const messageDetails = change.fullDocument;
        if(change.operationType === "insert"){
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received,
                _id: messageDetails._id
            });
        }else{
            console.log("Insert operation not completed.");
        }
    })
})



app.use(express.json());

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});


app.get("/", (req,res) => {
    res.status(200).send("Hello from whatsapp!!");
});

app.get("/api/messages/sync", (req,res) => {
    Message.find((error, data) => {
        if(error){
            res.status(500).send(error);
        }else{
            res.status(200).send(data);
        }
    });
});

app.post("/api/messages/new", (req,res) => {
    const message = req.body;
    Message.create(message, (error, data) => {
        if(error){
            res.status(500).send(error);
        }else{
            res.status(201).send(data);
        }
    });
});



app.listen(port, () => console.log("Whatsapp server running on port", port));