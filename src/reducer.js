import {createReducer} from "@reduxjs/toolkit";
const initialState = {
 message:[
    {
        handler:'bot',
        msg:'Hello, Welcome to student info system!'
    }
 ]
};
export const customreducer = createReducer(initialState,{
    gotit:(state)=>{
        state.message.push({handler:'User',msg:'Got it!'});
        state.message.push({handler:'bot',msg:'Enter your Name'});
    },
    name:(state,action)=>{
        state.message.push({handler:'User',msg:action.payload});
        state.message.push({handler:'bot',msg:'Enter your age'});
    },
    age:(state,action)=>{
        state.message.push({handler:'User',msg:action.payload});
        state.message.push({handler:'bot',msg:'Thank you'});
    },
});