
import express from "express";

// import userRegister from "../controller/AuthController.js";
import {AuthController } from "../controller/AuthController.js";
import upload from "../middlewares/multer.middleware.js";
import { checkUser } from "../middlewares/checkuser.js";
import { TaskController } from "../controller/TaskController.js";

const route = express.Router();

route.use('/user',checkUser,AuthController);
route.use('/task',TaskController);
export default route;
//  route.get('/protectedroute',secretRoute);
// route.post('/register',RegisterUser);
// route.post('/upload',upload.single('file'),uploadFile);
// route.get('/allusers',GetAllUser)
// route.get('/user/:email',GetUser ); 
//  route.put('/update/:email',UpdateUser);
//  route.post('/login',login);
//  route.delete('/delete/:email', DeleteUser);
//  route.put('/updatepassword/:email', updatePassword)