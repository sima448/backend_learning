//protocols -> rules -> internet pe kuchh bhi karne ke liye yek rules bnaya gya he ,aur ye rules jinhone internet bnaya unhone hi bnaya he, esliye hme un rules ko follow karna bahut jaruri he, our ye rules follow ho esiliye hmare operating system ke software me ye rules pre installed aata he,aur ve rules automaticaly follow hote he,
//http & https 
//http -> ek protocol he(ese hm yek rule bhi bol sakte he) because without protocols neither receive any data nor send any data.

//const http = require('node:http');
//or
const http = require('http');
const server = http.createServer(function(req, res){
    res.end("hello world! dear")
})
server.listen(3000);//hm yek server create kiye he 
