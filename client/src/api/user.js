import axios from "./axios";


export const requestServerRegister = (data)=>axios.post("/user/register",data)

export const requestServerLogin=(data)=>axios.post("/user/login",data)

export const requestServerNewAccessToken=(data)=>axios.post("/user/token",data)