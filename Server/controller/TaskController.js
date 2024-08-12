import { Router } from "express";
import { User } from "../models/UserModel.js";
import { sendResponse } from "../middlewares/makeresponse.js";
import { tasks } from "../models/tasksModel.js";
import { createTask } from "../services/TaskService.js";


const route = Router();

route.post('/add', async (req,res)=>{
    try {
        
        const user = await User.findById(req.body._id);
        if(!user){
            return sendResponse(res,500,false,'user not found', user);
        }
        const task =await createTask({taskName:req.body.taskName,_user:req.body._id })
        console.log(user,task);
        sendResponse(res,200,true,'task is added', task);
    } catch (error) {
        sendResponse(res,500,false,'fialed to add', error.message);
    }
});

// route.get('/get?:_id',async (req,res)=>{
//     try {
//           const id = req.params?._id;
//           console.log("id",id);
//           let tasksList = [];
//           if(id){
//               tasksList = await tasks.find({_user:id});
//           }
//           else {
//             tasksList = await tasks.find();
//           }
//         sendResponse(res,200,true,'task list found', tasksList);
//     } catch (error) {
//         sendResponse(res,500,false,'task is added', error.message);
//     }
// });

route.post('/get',async (req,res)=>{
    try {
          const id = req.body?.id;
          console.log("id",id);
          let tasksList = [];
          if(id){
              tasksList = await tasks.find({_user:id});
          }
          else {
            tasksList = await tasks.find();
          }
        sendResponse(res,200,true,'task list found', tasksList);
    } catch (error) {
        sendResponse(res,500,false,'task is added', error.message);
    }
    //searhing, sorting , pagination, load more functionality
});




export const TaskController = route;