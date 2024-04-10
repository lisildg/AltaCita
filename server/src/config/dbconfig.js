const {MONGODBCONNECT} = require('./env')
const mongoose = require('mongoose');

const dbconect = async()=>{
try {
    await mongoose.connect(MONGODBCONNECT)
    console.log('connected database')
   
} catch (error) {
    console.log('somenthing went wrong connecting to the db ñeriii')
}
}
module.exports = dbconect;