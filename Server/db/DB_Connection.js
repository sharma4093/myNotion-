import 'dotenv/config'
import mongoose from 'mongoose';
const uri = "mongodb+srv://prashant4093:prashant4093@mynotion.jtwq7kr.mongodb.net/?retryWrites=true&w=majority&appName=myNotion";

// const connectDB =async ()=>{
//     try {
//         const connect = await mongoose.connect(uri,{serverSelectionTimeoutMS:30000});
//         console.log(`mongodb is connected on ${connect.connection.port}`)
//     } catch (error) {
//         console.log(error);
//     }

// }

const connectDB = async ()=>{
    await mongoose.connect(uri,{serverSelectionTimeoutMS:30000})
    .then(({connection})=>console.log(`Database is connected ${connection.port}`))
    .catch((error)=>{throw new error; console.error(error);});
}

export default connectDB;