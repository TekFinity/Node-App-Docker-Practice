const express = require("express");
const app = express();
const {MONGO_USER, MONGO_IP, MONGO_PORT, MONGO_PASSWORD} = require('./config/config');
const mongoose = require("mongoose");
mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`).then(()=>{console.log("successfully connected")}).catch((e)=>{
    console.log("error occur", e);
});

app.get('/', (req, res)=>{
    res.send("<h2>Hi There test!</h2>")
})
const port = process.env.PORT;
app.listen(port,()=> console.log(`Listening on port ${port}`));
