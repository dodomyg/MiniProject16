const express = require('express')
const mongoose = require('mongoose')
const userRoutes=require('./Router/userRoutes')
const bookRoutes=require('./Router/bookRoutes')
const chatRoutes=require('./Router/chatRoutes')
const messageRoutes=require('./Router/messageRoute')

require('dotenv').config()
const cors = require('cors')
const cookieParser=require('cookie-parser')



const app = express()
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(express.static("uploads/"));
app.use(express.json())
app.use(cookieParser())

app.use("/api/users",userRoutes)
app.use("/api/books",bookRoutes)
app.use("/api/chat",chatRoutes)
app.use("/api/message",messageRoutes)


const PORT = process.env.PORT || 8080


mongoose.connect("mongodb+srv://dakshk:hFFXnXwDYHN7msWM@cluster0.a1gckjp.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.listen(PORT,()=>{
        console.log('====================================');
        console.log(`Backend is running on ${PORT} and mongodb connected`);
        console.log('====================================');
    })
}).catch((err)=>{
    console.log(err);
})
