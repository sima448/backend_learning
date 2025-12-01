const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");


app.get("/", function (req, res){
    res.send("hey");
})
app.get("/create", async function (req, res){
    //res.send("create krenge");
    let user = await userModel.create({
        username: "Suman",
        age : 18,
        email: "suman@gmail.com" 
    });
    res.send(user);
});

app.get("/post/create", async function (req, res){
    let post = await postModel.create({
        postdata: "hello how are you all",
        user: "68fb632c2fe3542e0e72f232"
    });


let user = await userModel.findOne({_id: "68fb632c2fe3542e0e72f232"});
user.posts.push(post._id);
await user.save();

res.send({post, user});
});

app.listen(3008);