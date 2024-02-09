const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema; 


const jobSchema= new mongoose.Schema({

    title:{
        type:String,
        trim: true,
        require:[true, 'Title is required'],
        maxlength: 70,
    },
    description:{
        type:String,
        trim: true,
        require:[true, 'Discription is required']
    },
    salary:{
        type:String,
        trim: true,
        require:[true, 'Salary is required']
    },
    location:{
        type : String,
    },
    available:{
        type : Boolean,
        default:true
    },
    jobType:{
        type : ObjectId,
        ref: "JobType",
        required: true
    },
    user:{
        type : ObjectId,
        ref: "User",
        required: true
    },
    
},{timestamps:true})

module.exports = mongoose.model("Job",jobSchema);