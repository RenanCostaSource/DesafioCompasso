import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const getstarring = createAction('GET_STARRING');


export default createReducer(INITIAL_STATE,{
    [getstarring.type]: (state, action) => action.payload
    
   
})