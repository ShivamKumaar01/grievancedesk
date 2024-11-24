
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
    mobile:{
        type:String,
        required:true,
        trim:true,

    },
    urn:{
        type:String,
        required:true,
        trim:true,

    },
    department:{
        type:String,
        required:true,
        enum:["IT","ECE","CSE","Civil","EEE","BCA","BBA","Mechnical"],
    },
    year:{
        type:String,
        required:true,
        enum:["1","2","3","4","5"],
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"],
    },
    mentor:{
        type:String,
        required:true,
        trim:true,

    },
    grievancecategory:{
        type:String,
        required:true,
        cat:["academics","hostel","administrative","facility","other"]
    },
    grievancedescription:{
        type:String,
        required:true,
    },
    grievstatus:{
        type:String,
        enum:["0","1","-1"]
    },
    comment:{
        type:String,

    },
    flag:{
        type:Boolean,
    }

   



});
module.exports = mongoose.model("Register",registerSchema );



// pass  BHuwGK0afYOMmNYA
// mongodb+srv://shivamkumaar01:<db_password>@cluster0.8iusb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0