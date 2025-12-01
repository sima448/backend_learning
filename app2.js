const express = require('express');
const app = express();

const userModel  = require('./usermodel');//ab hm create,update ,read, read,perform kr sakte he


app.get('/',(req, res) => {
    res.send("hey")
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({//mongoose me run hone wala sara code async hi hoga esliye hm (await) ka use krenge aur esme yek requirement hota he(async) 
        name: "suman singh",
        username: "suman",
        email: "sima@gmail.com"
    })
   res.send(createduser);
})

/* app.get("/read", async (req, res) => {
    let users = await userModel.find({username: "suman"});//array ke form me data dega ->[{....}]
    res.send(users);//only one data read, esme vahi data read hoga ho hm read karna chahte he
})
*/

app.get("/read", async (req, res) => {
    let users = await userModel.find(); 
    res.send(users);//all data read
})
/*  app.get("/read", async (req, res) => {
    let users = await userModel.findOne({username: "suman"});//object ke form me data dega -> {...} -> only one data read from stating chahe vo koi bhi data ho
    res.send(users);//only one data read
})*/


app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({username:"sima"}, {name: "sims singh"}, {new: true})
   res.send(updateduser);
})

app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "sima"});
    res.send(users);//all data read
})

app.listen(3005);































// app.get('/create',(req, res) => {
//     userModel.create({//async code he-> fir ye chlega
//         name: "sima",
//         username: "sima",
//         email: "sima@gmail.com"
        
//     })
//     console.log("hey");//sync code he -> pahle ye chlega
// })
