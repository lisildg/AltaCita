require('dotenv').config();
const MONGODBCONNECT = process.env.MONGODBCONNECT;
const JWT_SECRET=process.env.JWT_SECRET;
module.exports = {
    MONGODBCONNECT,
    JWT_SECRET
}

