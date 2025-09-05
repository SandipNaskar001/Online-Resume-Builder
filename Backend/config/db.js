import mongoose from "mongoose";

export const connectDb=async ()=>{
    await mongoose.connect('mongodb+srv://sandip:sandip123@resumebuilder.qtlhubq.mongodb.net/ResumeBuilder1')
    .then(()=>console.log('connected'))
}