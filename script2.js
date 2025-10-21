//1.NPM understanding
//2.installing and uninstalling anything basics & advanced
//3.understanding node_modules:
//4.dependencies ->packages and packages ki dependencies
//5.devdepndencies -> aise packages jo shirfh development me kam aayenge pr jb application bn jayega tb hm in packages ko use nhi krenge
//6.scripts - understanding default scripts PATH and custom scripts
  


//1.NPM understanding -> npm ka name -> old fulform node package manager> yaha pe hm npm se related sare packages ke bare me janege and with different packages bhi esme include he use bhi janenge jese ki-> js ki,react.ki,etc bahut sari packages. -> log ese (nahi pata mujhe) ya (naan paneer makhni) bhi bolte he .
//node js jo core me installed hoke aata he vo module kahlata he.
//npm se jo hm download and use karte he wo hota he package.


////////////////////////////
//2.installing and uninstalling anything basics & advanced
//text to speech -> yek app bnayenge help of in npm -> ye basicaliy yesa app hoga jisme jo log dekh kr pd nhi sakte vo lo sun kr samjh sake
//install -> npm i packageKaName -> Example : npm i one-liner-joke
//uninstall -> npm uninstall packagekaName -> Example: npm uninstall one-liner-joke
//how to installing particular versions-> Example : npm home pe jake kisi bhi particular version ko install kr sakte he,jb hm 



console.log("helio how are you");


//////////
//3.understanding node_modules: node_modules ke under hm jo bhi packages install karte he vo package agar pahale se kisi our package pe depend he(ya bahut sare packages pe depend he) to yo sare packages install honge us yek packages ke sath jis particular package ko hm install kr rahe honge, pr hme un sare package se koi lena dena nhi but vo sar package(ya use code bol sakte he) hmare system me dikhenge,

/////////////////////////
//6.scripts - understanding default scripts PATH and custom scripts
//Q1. kai bar hm koi script chlate he and us script me hm likhte he ye command jo niche diya likha gaya he
//start & test: jb hm node & npm install karte he tb hmare system ke window and operating system ke PATH me ye do words(command) mantion kr diye jate he(npm start & npm test) aur jb hm es comand ko chlate he to terminal ese find kr leta he but (npm kuchh-aur) likh kr chalaye  to hamara terminal ese find nhi ker payega kyuki usko es command ke bare me jankari nhi he.
//npm start
//npm run dev
//npm run concurrent
// package.json package: ke under hm bahut sare scripts: scripts ke ander chala sakte he.
/*
{"scripts":
"start":"node script.js",//ye pahle se install he to eske liye hme(npm start likhna he terminal me)
"chacha":"echo \"this is good\"",//chacha name understanding ke liye he actualy yesa kuchh nhi hota(but chacha name hmne bnaya he to eske liye hme -> npm run chacha likhna hoga)
"test": "echo \"Error: no test specified\" && exit 1"
*/


