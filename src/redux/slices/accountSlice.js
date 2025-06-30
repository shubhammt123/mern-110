import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name : "account",
    initialState : {
        accountBalance : 0
    },
    reducers : {
        deposite : (state,action)=>{
            state.accountBalance = state.accountBalance + action.payload;
        },
        withdrawl : (state,action)=>{
            state.accountBalance = state.accountBalance - action.payload;
        }
    }
})

export const {deposite , withdrawl} = accountSlice.actions;
export default accountSlice.reducer;