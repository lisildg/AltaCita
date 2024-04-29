const User =require("../models/user.model");
const bcrypt=require("bcrypt");

const registerController =async (req,res)=>{
 try {
    const {email,password}=req.body;
    //validamos si ya existe un email con el mismo PassWord
    const findUser= await User.findOne({email})
    if(findUser){
        return res.status(400).json({
            message:"user already exist."
        })
    }
   
    //encriptamos password

    const HashedPassword=bcrypt.hashSync(password,10)
    //nuevo usuario
    const newUser=await User.create({email,password:HashedPassword})

        res.status(200).json({newUser, message:"user created successfully."})
    
   

 } catch (error) {
    res.status(500).json({message:"Someting went Wrong.",error})
 }
}
const loginController = async (req,res)=>{
     
}
const validateTokenController = (req,res)=>{}


module.exports={
    registerController,
    loginController,
    validateTokenController
}