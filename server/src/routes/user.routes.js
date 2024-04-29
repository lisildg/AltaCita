const {Router}=require("express");
const { registerController, loginController, validateTokenController } = require("../Controllers/user.controller");

const UserRouter =Router()
UserRouter.post("/register",registerController)

UserRouter.post("/login",loginController)

UserRouter.post("/validate-token",validateTokenController)


module.exports=UserRouter