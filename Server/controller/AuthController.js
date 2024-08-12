import { User } from "../models/UserModel.js";
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken'
const jwt = jsonwebtoken
import cookieParser from "cookie-parser";
import { sendResponse } from '../middlewares/makeresponse.js';
import { Router } from 'express';
import { createUser, deleteUser, getUser, updateUser } from '../services/AuthServices.js';
import { checkUser } from '../middlewares/checkuser.js';


const route = Router();



route.post('/register', checkUser,async (req,res)=>{
    try {
        if(!req.body.email || !req.body.name || !req.body.mobile_no || !req.body.password){
            return sendResponse(res,500, false, 'all fields are required!',payload);
        }
        const hashPassword = await bcrypt.hash(req.body.password,10);
        const payload = {name:req.body.name, email:req.body.email, mobile_no:req.body.mobile_no, password:hashPassword};
        createUser(payload);
        sendResponse(res,200, true, 'registered successfully', payload);

    } catch (error) {
        sendResponse(res,500, false,'failed to register', error);
    }
})

route.get('/get/:email', async (req,res)=>{
    try {
        const email = req.params
        const user = await getUser(email); 
        sendResponse(res,200,true,'user found',user)
    } catch (error) {
        sendResponse(res,500,false, 'failed to get', error);
    }
})

route.get('/getbyid/:_id', async(req,res)=>{
    try{
        const users = await User.findById(req.params);

        console.log(users,req.params, "this is params and users data here ");
        sendResponse(res,200,true,'users list found', users);
    }catch(error){
        sendResponse(res,404, false, 'users data not found', error.message);
    }
})

route.put('/update/:email',async (req,res)=>{
    try {
        const search = req.params;
        const payload = {name:req.body.name, mobile_no:req.body.mobile_no, password:req.body.password};
        const option = {new:true};  
        console.log(search,payload,option);
        const newUser = await updateUser(search,payload,option);
        console.log(newUser);
        sendResponse(res,200,true,'successfully updated', payload);
    } catch (error) {
        sendResponse(res,500,false,'failed to update', error);
    }
});

route.delete('/delete/:email',checkUser,async(req,res)=>{
    try {
        const email = req.params;
        const user = deleteUser(email);
        sendResponse(res,200,true,'deleted ',user);
    } catch (error) {
        sendResponse(res,500,false,'failed to delete', error)
    }
});

route.get('/allusers',async (req,res)=>{
    try {
        const users = await User.find();
        sendResponse(res,200,true,'all users',users);
    } catch (error) {
        sendResponse(res,500,false,'unable to get all users', error.message);
    }
})


export const AuthController = route;





export const login = async (req,res)=> {
    try {
        const {email, password} = req.body;
        if(!(email && password)){
            return res.status(400).json({message:'all data is required'})
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).send({message:'uesr not found',error:{
                message:error.message,
                stack:error.stack
            }})
        }
        const checkPassword = await bcrypt.compare(password,user.password);
        if(checkPassword){
            const jwtToken =  jwt.sign({id:user._id,email:user.email}, process.env.JWT_SECRET_CODE,{expiresIn:3000});
            
             res.status(200).json({message:'user logged in successfully',token:jwtToken});
        }else{
            return res.status(404).send('password not matched');
        }
    } catch (error) {
        return res.status(404).json({message:"login failed", error:{
            message:error.message,
            stack:error.stack
        }});
    }
}

// export const RegisterUser = async (req, res) => {
//     try {
//         const {name,email,mobile_no, password} = req.body;
//         const user = await User.findOne({email});
//         if(user) {
//            return res.status(200).json({message:'user is already registered'})
//         }
//         const EncPassword = bcrypt.hash(password, process.env.SALT);
       
//         const newUser=await User.create({name,email, mobile_no, password:EncPassword});
//           return  res.status(201).json({message:'user successfully registered', data:newUser})
//     } catch (error) {
//       return  res.status(500).json({message:'internal server error', error:{message:error.message,stack:error.stack,
//         }})
//     }
// };

// export const GetAllUser = async (req, res) => {
//     try {
//         const users = await User.find();

//         res.status(200).json({
//             message: "All users are here",
//             data: users
//         });
//     } catch (error) {
//         console.error("Error fetching users:", error);
//         res.status(500).json({ message: "Failed to fetch users", error: error.message });
//     }
// };


// // export const GetUser = async (req, res) => {
// //     try {
// //         const email = req.params.email;
// //         const response = await User.findOne({ email });
// //         // res.send(response);
// //         console.log(response, "console");
// //         sendResponse(res,200,true,'found user', response);
// //     } catch (error) {

// //         sendResponse(res,500,false,'user was not found', error)
// //     }
// // }


// export const UpdateUser = async (req, res) => {
//     try {
//         const { email } = req.params;
//         console.log(req.params.email, "params");
//         const user = await User.findOneAndUpdate(
//             { email: email },
//             { name: req.body.name, email: req.body.email, mobile_no: req.body.mobile_no, password: req.body.password },
//             { new: true }
//         );
//         if (!user) {
//             return res.status(404).send({ message: 'details not found', data: user });
//         }
//         res.status(200).send({ message: 'updated successfully!', data: user });
//     } catch (error) {
//         res.status(500).send({ message: 'internal server error during updating' });
//     }
// }


// export const updatePassword=async(req,res)=>{
//     try {
//         const {email} = req.params;
//         const {oldPassword,newPassword} = req.body;
//         const user = await User.findOne({email});
//         const checkPassword = await bcrypt.compare(oldPassword,user.password);
//         if(!checkPassword){
//             res.send("password didn't matched");
//         }
//         const hashedPassword = await bcrypt.hash(newPassword,10);
//         console.log("new password",hashedPassword, typeof(process.env.SALT));
//         const userUpdated= await User.findOneAndUpdate({email:email},{password:hashedPassword},{new:true} )
//         console.log(req.body, "checkpassword", checkPassword);
//         res.status(200).json({message:'changed',data:userUpdated});
//     } catch (error) {
//         console.log("ERROR",error);
//     }
// }

// export const uploadFile= async(req,res)=>{
//     try {
//         const file = req.file;
//         console.log(req.file.size,'this is file');
//         res.status(200).send('done')
//     } catch (error) {
//      console.log(error);   
//     }
// }


// export const DeleteUser = async (req, res) => {
//     try {
//         const { email } = req.params;
//         const user = await User.deleteOne({ email });
//         if (user.deletedCount === 0) {
//             return res.status(404).json({ message: 'not found' });
//         }
//         res.status(200).json({ message: 'deleted', data: user })
//     } catch (error) {
//         console.log('failed deletion')
//     }
// }

// export const secretRoute = ()=>{
//     try {
//         res.send('access the protected route');
//     } catch (error) {
//         res.send('failed to access the protected route');
//     }
// }


// //by rohit kumar 
// // router.post('/register', async(req,res)=>{
// //     try {
// //         await a({})


// //     } catch (error) {
        
// //     }
// // })


// // router.route('/')
// //     .post((req,res)=>{

// //     })
// //     .get((req,res)=>{

// //     })
// //     .put((req,res)=>{

// //     })
// //     .delete((req,res)=>{

// //     })