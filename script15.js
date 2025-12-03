const express = require('express');
const app = express();
app.set("view engine", "ejs");

app.use(express.static('./public'));


app.get('/', function (req, res){
    //ab ejs file ke liye send nahi karna padega hume render karna hoga
    //res.send("hello route")//ejs file se pahle hm send kar rahe the
    res.render("index");//but ab hmne ejs file bnai he to hme render use karna hoga 
})
app.get('/error', function (req, res, next){
    throw new Error('something went wrong!');
})

app.get('/contact', function (req, res){
    res.render("contact", {name: "Sima Singh"});
})
app.get('/profile/:username', function (req, res){
    res.send(`hello from ${req.params.username}`);
    //res.send("hello route how are you");
})

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})



app.listen(3000);