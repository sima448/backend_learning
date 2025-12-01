const cookiParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(cookiParser())
app.get("/", function(req, res){
   let token = jwt.sign({email: "sima@example.com"}, "secret")
   res.cookie("token", token)
   res.send("done");
});
 app.get("/", function(req, res){
   let token = jwt.sign({email: "sima@example.com"}, "secret")
   res.cookie("token", token)
   res.send("done");
});
app.get("/read", function (req, res){
    console.log(req.cookies.token);
})

// app.get("/read", function(req,res){
//     let data = jwt.verify(req.cookies.token, "secret")
//     console.log(data);
// })


app.listen(3006);