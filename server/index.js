const express = require("express");
const app = express();
const mongoose = require('mongoose');
const userModel = require('./models/users');
mongoose.connect("mongodb+srv://hoang91:Dlts5bau2!@cluster0.vff1adp.mongodb.net/mernapp?retryWrites=true&w=majority"
);
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/getusers", (req, res) => {
    userModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
});

app.post("/createUser", async(req,res) => {
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();   
    
    res.json(user);
});

app.listen(3001, () =>{
    console.log("SERVER RUNS PERFECTLY!");
});