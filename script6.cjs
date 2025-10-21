const express = require('express');
const app = express();
const Path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static(Path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/',function(req, res){
  fs.readdir(`./files`, function(err, files){
    res.render("index1",{files: files});
  })
})

app.get('/file/:filename',function(req, res){
  fs.readFile(`./files/${req.params.filename}`, "Utf-8",function(err, filedata){
    //console.log(filedata);
    res.render('show', {filename: req.params.filename, filedata});
  })
  })

app.get('/edit/:filename',function(req, res){
  res.render('edit', {filename: req.params.filename});
  })
app.post('/edit',function(req, res){
  //console.log(req.body);
  fs.rename(`./files/${req.body.previous}`, `./files/${req.body.New}`, function(err) {
    res.redirect("/")
  });
  })



app.post("/create", function(req, res){//route he
  console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details, function(err){
     res.redirect("/");
})

})
   




app.listen(3003)//
//, function() {
  //  console.log("its running")
//})



///localhost:3003