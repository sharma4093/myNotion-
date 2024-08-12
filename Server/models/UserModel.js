import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        message:"Name is required",
    },
    email:String,
    mobile_no: Number,
    password:String,
    profile:{
        type:String,
    },
    status:['active','inacive','deleted'],

},{timestamps:true});

export const User =new mongoose.model('User',userSchema);
