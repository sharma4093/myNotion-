import 'dotenv/config'
import express from "express";
import cors from 'cors';
import connectDB from './db/DB_Connection.js';
import route from './routes/Route.js';
import cookieParser from 'cookie-parser';
import os from 'os';
// import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1',route);
connectDB();
// authMiddleware();
app.listen(port,()=>{
    console.log(`app is runnin, ${port}`)
})
