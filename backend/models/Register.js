const { text } = require('express');
const mongoose=require('mongoose');
const registerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,

    },
    contact:{
        type:Number,
        required:true,
        trim:true,

    },
    dept:{
        type:String,
        required:true,
        dname:["IT","ECE","CSE","Civil","EE","BCA","BBA","Mechnical"],
    },
    year:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        required:true,
        gname:["M","F"],
    },
    mentor:{
        type:String,
        required:true,
        trim:true,

    },
    category:{
        type:String,
        required:true,
        cat:["academics","hostel","nonacademics"]
    },
    description:{
        type:Text,

    }
})
module.exports = mongoose.model("Register",registerSchema );