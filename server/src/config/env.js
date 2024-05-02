require('dotenv').config();
const MONGODBCONNECT = process.env.MONGODBCONNECT;
const ACESS_JWT_SECRET=process.env.ACESS_JWT_SECRET;
const REFRESH_JWT_SECRET=process.env.REFRESH_JWT_SECRET;

module.exports = {
    MONGODBCONNECT,
    ACESS_JWT_SECRET,
    REFRESH_JWT_SECRET
}

