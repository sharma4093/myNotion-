import mongoose from "mongoose";
import { Schema } from "mongoose";

const task = new Schema({
    _taskName:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    deadLine:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    status:{
        type:String,
        enum:["todo","onprogress","done","reviewed"],
    },
    _user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
},{timestamps:true});

export const tasks = mongoose.model('task',task);