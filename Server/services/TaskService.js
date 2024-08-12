import { tasks } from "../models/tasksModel.js";

export const createTask=(payload)=>new Promise((resolve,reject)=>{
    tasks.create(payload)
    .then(resolve)
    .catch(reject)
});