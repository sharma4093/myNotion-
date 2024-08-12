import { User } from "../models/UserModel.js";

export const createUser = async (payload)=>new Promise((resolve,reject)=>{
    User.create(payload)
    .then(resolve)
    .catch(reject)
});

export const getUser=async (search)=> new Promise((resolve,reject)=>{
    User.findOne(search)
    .then(resolve)
    .catch(reject)
});

export const updateUser = async (search, payload, options)=> new Promise((resolve,reject)=>{
    User.findOneAndUpdate(search,payload,options)
    .then(resolve)
    .catch(reject)
});

export const deleteUser= async (email)=> new Promise((resolve,reject)=>{
    User.findOneAndDelete(email)
    .then(resolve)
    .catch(reject)
});