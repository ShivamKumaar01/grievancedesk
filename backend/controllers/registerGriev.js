const Register=require("../models/Register");
exports.registerGriev=async (req,res)=>{
    try{
        const{name,email,contact,dept,year,gender, mentor,category,description}=req.body;
        const response = await Register.create({name,email,contact,dept,year,gender, mentor,category,description});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );

    }
    catch(error){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}
