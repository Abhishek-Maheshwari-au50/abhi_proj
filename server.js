const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("/.routes")

app.use(express.json());
app.use("/", routes);

const db = "mongodb+srv://username:password@clusterdev-sndjb.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connect = mongoose
                .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
                .then(() => console.log("MongoDB Connected..."))
                .catch((err) => console.log(err));


const port = 5000;

app.listen(port, () => {
    console.log(`Sever is running on ${port}`);
});