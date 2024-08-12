export const sendResponse=async(res,statusCode,success,message,payload)=>{
    new Promise((resolve)=>
        res.status(statusCode).json({success, message,data:payload}));
}
