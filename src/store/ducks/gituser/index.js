import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = null;

export const getuser = createAction('GET_USER');


export default createReducer(INITIAL_STATE,{
    [getuser.type]: (state, action) => action.payload
    
   
})