const Register=require("../models/Register");
const Admin=require("../models/Admin");


const bcrypt=require("bcryptjs");
const bcrypt=require("bcryptjs");
const jwt = require('jsonwebtoken');


// this is for register grievance
exports.registerGriev=async (req,res)=>{
    try{
        const{name,email,mobile,department,gender, mentor,grievancecategory,grievancedescription,year,urn}=req.body;
        // validate 
        if(!name || !email || !mobile|| !department || !gender || !mentor ||!grievancecategory || !grievancedescription ||!year ||!urn){
            return res.status(400).json({
                success:false,
                message:"Please fill in all fields"
            });
        }
        const response = await Register.create({name,email,mobile,department,gender, mentor,grievancecategory,grievancedescription,year,urn});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );

    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:error.message,
        })

    }
}

// THis is for admin signup
// exports.adminSignup=async(req,res)=>{
    
//     try{
//         const{name,email,designation,password,adminCode}=req.body;
//         if(adminCode !== process.env.ADMIN_CODE){
//             return res.json({
//                 success:false,
//                 message:"Unauthorized"
//             })
//         }
//         console.log(process.env.ADMIN_CODE);

//         // check karo user already exist hai ki nahi
//         const existingAdmin = await Admin.findOne({email});
//         if(existingAdmin){
//             return res.status(404).json({
//                 success:false,
//                 message:"Admin already exist"
//             })
//         }
//         console.log("hellow g");
//         // password ko secure kiye and store kiye hai
//         let hashedPassword;
//         try{
//             hashedPassword=await bcrypt.hash(password,10);

//         }
//         catch(error){
//             console.error(error)
//             return res.status(500).json({
//                 success:false,
//                 message:"error in hashing password"
//             })

//         }
//         // admin ko create karo and store in db
//         const admin = await Admin.create({
//             name,email,designation,password:hashedPassword,
//         })
//         console.log(admin);
//         return res.status(200).json({
//             success:true,
//             message:"user created successfully"
//         })


//     }
//     catch(error){
//         return res.status(404).json({
//             success:false,
//             message:"please try later to signup"
//         }) 
//     }
// }

exports.adminSignup = async (req, res) => {
    try {
        const { name, email, designation, password, adminCode } = req.body;

        // Ensure password is provided
        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password is required",
            });
        }

        // Check if all fields are provided
        if (!name || !email || !designation || !password || !adminCode) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all fields",
            });
        }

        // Check if admin code is correct
        if (adminCode !== process.env.ADMIN_CODE) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: "Admin already exists",
            });
        }

        // Hash the password securely
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (error) {
            console.error("Error in hashing password:", error);
            return res.status(500).json({
                success: false,
                message: "Error in hashing password",
            });
        }

        // Create and store admin in DB
        const admin = await Admin.create({
            name, email, designation, password: hashedPassword,
        });

        return res.status(200).json({
            success: true,
            message: "Admin created successfully",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server error, please try again later",
        });
    }
};

// This is for admin Login
exports.adminLogin=async(req,res)=>{
    try{
        const{email,password}=req.body;
        console.log(email,password);
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"please fill all the details"
            })
        }
        // check if admin exist or not
        const admin =await Admin.findOne({email})
        if(!admin){
            return res.status(400).json({
                success:false,
                message:"invalid email or password"
            })
        }
        else{
            // check if password is correct or not
            const isMatch =await bcrypt.compare(password,admin.password)
            if(!isMatch){
                return res.status(400).json({
                    success:false,
                    message:"invalid email or password"
                })


            }
        }
        return res.status(200).json({
            success:true,
            message:"admin logged in successfully",
        })



    }
    catch(error){
        console.error(error);
        return res.status(404).json({
            success:false,
            message:"please try later to login"
        })

    }
}

// controllers for fetching data from backend
exports.fetchingData=async(req,res)=>{
    try {
        const data = await Register.find();
        console.log(data);
       
        res.status(200).json({
            success: true,
            data: data,
            message: "Data fetched successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(404).json({
            success: false,
            message: "There is something wrong in fetching data"
        });
    }
}
