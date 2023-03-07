const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connet("mongodb+srv://shek252385:shek1234@cluster0.zy1elcj.mongodb.net/student?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true},
                    (err) => 
                    {
                        if(err)
                        {
                            console.log("Connection Failed", err);
                        }
                        else
                        {
                            console.log("Conncetion Successull")
                        }
                    }
                )

const userSchema = new mongoose.Schema({
                                        name: String,
                                        email: String,
                                        password: String,
                                      })
                                    
const User = new mongoose.model("stucollection", userSchema);
app.listen(5010, () => {
    console.log("Listening to MongoDB on Port 5010");
})

module.exports = User;