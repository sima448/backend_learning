const express = require('express');
const app = express();
const Path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static(Path.join(__dirname, 'public')));// pura path find kterega 

app.set('view engine', 'ejs');//view engine he

app.get("/", function(req, res){//route he
    res.render("index");//(index.ejs) bhi likh sakte he.nhi to index se hi ho jayegabecoz ejs set kr diye he hm//aab hm send ke place pr render likhenge
})
app.get("/profile/:username", function(req, res){
   res.send(`Welcome, ${req.params.username}`); //req.params.username//eska matlab ki yesa kuchh jiske aage colon(:) he.
})
app.get("/author/:username/:age", function(req, res){
   res.send(`welcome, ${req.params.username} of age ${req.params.age}`); //req.params.username//eska matlab ki yesa kuchh jiske aage colon(:) he.
})

app.listen(3002, function() {
    console.log("its running")
})
























//1.console.log(__dirname +' public');//total path btayega ki hm kis jagah pe kam ker rahe he so that(/home/sima/Documents/Backend code public)
//2.const path = require('path);
//console.log(path.join(__dirname + ' public'));///(home/sima/Documents/Backend code public)
//both are same but second is right way to write.
//4.