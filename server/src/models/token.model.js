const mongoose =require("mongoose");

const tokenSchema=new mongoose.Schema({
    token:{
        type:String,
        unique:true,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
})

module.exports =mongoose.model("Token",tokenSchema)