const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

const authenticateMiddleware=(req,res,next)=>{
    try {
        const authHeader=req.headers.authorization
        if(authHeader){
            const token = authHeader.split(" ")[1]
            jwt.verify(token,JWT_SECRET,(err,decoded)=>{
                if(err){
                    return res.sendStatus(403);

                }
                req.user=user;
                next()
            })
        }else{

            return res.status(401).json({
                message:"Unauthorized"
            })
        }
    } catch (error) {
        res.status(401).json({
            message:"Unauthorized"
        })
    }
}

module.exports=authenticateMiddleware