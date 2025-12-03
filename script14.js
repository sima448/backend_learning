import express from 'express'

const app = express()

//hm kitna bhi middleware add kar sakte hain route se pehle because ye sequentially execute hote hain aur route se pehle hi execute hote hain
app.use((req, res, next) => {
    console.log("hello from middleware")
    next();
})
app.use((req, res, next) => {
    console.log("hello from middleware2")
    next();
})


//routes he (/)
app.get('/', (req, res) => {
  res.send('Hello World')
})
//another route (/profile)
app.get('/profile', (req, res) => {
  res.send('Hello from profile')
})

//app.listen(3000)