import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isAuthenticated:false,
    isLoading:false,
    email:"",
    id:"",
    token:""
}


const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
addUser:(state,action)=>{
    return
}
    }
})
export const { addUser}=userSlice.actions
export default userSlice.reducer