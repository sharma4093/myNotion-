import express from "express";
import { getUsers,getList } from "../controller/User.js";

const route = express.Router();

 route.get('/getuser', getUsers)
 route.get('/userlist',getList)

export default route;