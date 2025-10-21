//1. form handling and working with the forms
//2.handle backend process of forms and making sure the data coming from any frontend libraries,framework, templating engines. we still handle it at the backend.
//3.session.cookie:-hum log jb bhi frontend me browser pe koi bhi data likhte he and hum request backend pe karte he to frontend pr automatically data save ho jata he.

const express = require('express');
const app = express();

app.use(express.json())//json based data jo blob ke form me he use resdable form me convert karti he (totaly nhi kuchhhd tk karti he)
app.use(express.urlencoded({ extended: true}));//es code se x-wwww form ke data ko readable bnate he

app.get("/", function(req,res){
    res.send("HoW are you!");
})

app.get("/about", function(req,res){
    res.send("I am fine.");
})

app.get("/profile", function(req,res, next){
    return next(new Error("Not impleented"));
})
