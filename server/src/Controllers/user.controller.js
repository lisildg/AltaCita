const User =require("../models/user.model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");
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

        res.status(200).json({id:newUser._id, email:newUser.email, message:"user created successfully."})
    
   

 } catch (error) {
    res.status(500).json({message:"Someting went Wrong.",error})
 }
}
const loginController = async (req,res)=>{
     try {
        const { email , password }=req.body;
        const findUser= await User.findOne({email})
        if(findUser){

            const passwordIsMatch = bcrypt.compareSync(password,findUser.password)
            if(passwordIsMatch){
                const accessToken=jwt.sign(
                    {
                        id:findUser._id,
                        email:findUser.email
                    },
                    JWT_SECRET
                )

                return res.status(200).json({
                    logged:true,
                    token:accessToken,
                    user:{
                        id:findUser._id,
                        email:findUser.email
                    }
                })
            }else{
            return res.status(401).json({message:"email or password incorrect "})
                
            }


        }else{

            return res.status(400).json({message:"user not found."})
        }

        
     } catch (error) {
        return res.status(500).json({message:"Something went wrong",error})
        
     }
}
const validateTokenController = (req,res)=>{}


module.exports={
    registerController,
    loginController,
    validateTokenController
}