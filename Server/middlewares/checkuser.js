// import 'dotenv/config';
// import jwt from 'jsonwebtoken';

// export const authMiddleware=(req,res,next)=>{
//     try {
//         console.log(req.body);
//         // const decodedToken = jwt.verify(token,process.env.JWT_SECRET_CODE);
//         // console.log(decodedToken,"auth token");
//         next();
//     } catch (error) {
//         console.log(error);
//     }
// }


import { User } from "../models/UserModel.js"
import { sendResponse } from "./makeresponse.js"
export const checkUser=async (req,res,next)=>{
try {
    const email = {email:req.body.email};
    const user = await User.findOne(email);
    if(!user){
        return sendResponse(res,200,true, 'user doesnt exists!', user);
    }
    next();
} catch (error) {
    sendResponse(res,500,false,'error occoured', error.message);
}
}