import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'userSlice',
    initialState:{user:null},
    reducers:{
        updateUser:(state,action)=>{
            state.user=action.payload;
        },
        updateUserBalance:(state,action)=>{
            if(!state.user) return;
            state.user.balance+=action.payload;
        }
    }
});

export const {updateUser,updateUserBalance}=userSlice.actions;
export default userSlice.reducer;