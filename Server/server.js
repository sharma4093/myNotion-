import 'dotenv/config'
import express from "express";
import connectDB from './db/DB_Connection.js';
import Route from './routes/Route.js';
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req,res)=>{
    res.send("this is home ");
})
app.get('/hello', (req,res)=>{
    res.send("this is hello ");
    console.log('hello')
})

app.use('/',Route)

connectDB();
app.listen(process.env.PORT,()=>{
    console.log("app is running", `${port}`)
})