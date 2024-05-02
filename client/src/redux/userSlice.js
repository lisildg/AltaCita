import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isAuthenticated:false,
    isLoading:false,
    firstname:"",
    lastname:"",
    id:"",
    accessToken:""
}


const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
addUser:(state,action)=>{
    state.isAuthenticated=true
    state.firstname=action.payload.firstname;
    state.lastname=action.payload.lastname;
    state.id=action.payload.id;
    state.accessToken=action.payload.accessToken

},
removeUser:(state,action)=>{
    state.isAuthenticated=false,
    state.firstname="",
    state.lastname="",
    state.id="",
    state.accessToken=""
}
    }
})
export const { addUser,removeUser}=userSlice.actions
export default userSlice.reducer