//1.Express.js framework:it is a framework(matlab esme flow ko follow kiya jayega)agr flow me sabse pahale require,require hme karna hi hoga, eske bad hme agr apps vagera set karna ho to karna hi hoga,agar flow me RAUTS create karna he to karna hi hoga(but RAUTS ke under hme kya karna he vo hm khud tay kr sakte he )
//introduction to Express.js: it is a package of npm.
//Fremework:- framework is a flow,esme hme yek flow ke hisab se chalna hoga jese ki (sequencialy chalna hoga yek ke bad yek)but esme indivisuality khud ka likh sakte he. 
//definition of express js:it is package of npm and its a framwork that express js is manages everything from receiving the request and giving response.


//2.MERN STACK -> M-MongoDB, E-Express, R-React, N-Node
//React-> this is a tools(libraries) jisko hm apnejrurt ke hisab se use karte he



//3.Setting up a basic Express application.
//routes ->"/kuchhbhi"(quote marks ke ssth & slash ke sath kuchh bhi )


const express = require('express');
const app = express();


app.use(function(req, res, next){
    console.log("middelware chlao")
    next();
});//middelware code
app.use(function(req, res, next){
    console.log("middelware chlao yek bar aur")
    next();//yek bar aur
});

app.get("/", function(req, res){
    res.send("champion our sima")
});
app.get("/profile", function(req, res){
    res.send("champion my coach")//1.node script3.cjs//2.nodomon script.cjs
});
app.get("/about", function(req, res, next){
    return next(new Error("Something went wrong")) //(error create karna(route handle ke ander))ye error handle krta he, ye console me show hoga becoz error he 
});


app.use((err, req, res, next) => { //Yeh middleware sirf tab chalta hai jab next(err) call hota hai.Yeh error ko gracefully handle karta hai
    console.error(err.stack)//Terminal/Console (Backend) me output
    res.status(500).send('Something broken!')//ye frontend pe jayega)( Client ko safe message)
    
})

app.listen(3001);//server create


//3.middleware:-jab bhi server request accept karta he waha se route ke tk pahuchne se pahle hm us request ko bich me rokte he aur kuchh perform karte he to  vo element middleware kahtati he.
//4.Request and response handling: sabse pahle hme(frontend) pr browser me url likhna hota he tb requist jata he server(backend) ke pas,fir server  jo data hme chahiye use khojata he fir vo respons karta he matlab data ko lake hme )frontend pe dikhata he,tb hme hmari data milta he 
//6.error hendaling:-App crash nahi hoti,User ko friendly message milta ha,Developer ko debugging info milti hai,Secure & stable backend.














