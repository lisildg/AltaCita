import React from "react";

const Login = () => {
  return (
    <div className="bg-fondo min-h-screen  flex justify-center items-center">
      <div className="container relative rounded-lg p-10">
        <h1 className="text-xl text-primari mb-8 mr-20">Log in </h1>
        <div className="flex flex-col items-center mb-8 space-y-4">
          <div className="flex items-center border-2 border-second rounded-full px-4 py-2 transition duration-300 hover:border-green-400">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1000/1000777.png"
              alt=""
              className="w-6 mr-2"
            />
            <p className="text-gray-400">Sign in with Google</p>
          </div>
          <div className="flex items-center gap-4">
            <hr className="flex-grow border-gray-600" />
            <p className="text-gray-600">or</p>
            <hr className="flex-grow border-gray-600" />
          </div>
          <input
            type="text"
            maxLength="40"
            placeholder="Email"
            className="border border-second rounded-lg py-2 px-4 bg-transparent text-gray-400 placeholder-gray-400 text-center w-64"
          />
          <input
            type="password"
            maxLength="40"
            placeholder="Password"
            className="border border-second rounded-lg py-2 px-4 bg-transparent text-gray-400 placeholder-gray-400 text-center w-64"
          />
          <p className="border border-second rounded-full py-2 px-4 bg-transparent text-gray-400 text-center w-64 transition duration-300 hover:border-green-400 hover:text-white cursor-pointer">
            Log in
          </p>
          <p className="bg-primari rounded-full py-2 px-4 text-black text-center w-64 transition duration-300 hover:bg-hover-primari cursor-pointer">
            Forgot Password?
          </p>
          <p className="text-gray-400 text-center mr-32">
            Don't have an account?{" "}
            <span className="text-info cursor-pointer">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
