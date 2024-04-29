const {Router}=require("express")
const UserRouter = require("./user.routes")
const indexRouter=Router()

indexRouter.use("/user",UserRouter)

module.exports=indexRouter