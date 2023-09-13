import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    authUser:{
        type:String
    },
    authKey:{
        type:String
    }
})

export const task = mongoose.model("task",TaskSchema);