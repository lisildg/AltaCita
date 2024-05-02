const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ACESS_JWT_SECRET, REFRESH_JWT_SECRET } = require("../config/env");
const registerController = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    //validamos si ya existe un email con el mismo PassWord
    const findUser = await User.findOne({ email });
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({
        message: "firtsname, lastname, email and password are required.",
      });
    }
    if (findUser) {
      return res.status(400).json({
        message: "user already exist.",
      });
    }
    //encriptamos password

    const HashedPassword = bcrypt.hashSync(password, 10);
    //nuevo usuario
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: HashedPassword,
    });

    res
      .status(200)
      .json({
        id: newUser._id,
        email: newUser.email,
        message: "user created successfully.",
      });
  } catch (error) {
    res.status(500).json({ message: "Someting went Wrong.", ...error });
  }
};
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(200).json({
        message: "email / password are required.",
      });
    }
    const findUser = await User.findOne({ email });
    if (findUser) {
      const passwordIsMatch = bcrypt.compareSync(password, findUser.password);
      if (passwordIsMatch) {
        const accessToken = jwt.sign(
          {
            id: findUser._id,
            email: findUser.email,
          },
          ACESS_JWT_SECRET
        );

        const refreshTokenAlreadyExist= await TokenExpiredError.findOne({userId:findUser._id})
        if(!refreshTokenAlreadyExist){

            const refreshToken = jwt.sign(
              {
                id: findUser._id,
                email: findUser.email,
              },
              REFRESH_JWT_SECRET
            );
            const newRefreshToken= await Token.create({token:refreshToken,userId:findUser._id})
        }

        return res.status(200).json({
          accessToken,
          refreshToken,
          id: findUser._id,
          firstname: findUser.firstname,
          lastname: findUser.lastname,

        });
      } else {
        return res
          .status(401)
          .json({ message: "email or password incorrect " });
      }
    } else {
      return res.status(400).json({ message: "user not found." });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong", error });
  }
};

const validateTokenController =async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(401).send('Refresh Token no proporcionado');
    }
    try {

        const existingRefreshToken = await RefreshToken.findOne({ token: refreshToken });
        if (!existingRefreshToken) {
            return res.status(403).send('Refresh Token inválido');
        }
       
        jwt.verify(refreshToken, REFRESH_JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).send('Refresh Token inválido');
            }

            const accessToken = jwt.sign({ username: user.username, id: user._id }, ACESS_JWT_SECRET);
            
            res.json({ accessToken });
        });
    } catch (error) {
        console.error('Error al renovar el Access Token:', error);
        res.status(500).send('Error interno del servidor');
    }
};

module.exports = {
  registerController,
  loginController,
  validateTokenController,
};
