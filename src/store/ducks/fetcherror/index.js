import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = null;

export const seterror = createAction('SET_ERROR');
export const cleanerror = createAction('CLEAN_ERROR');


export default createReducer(INITIAL_STATE,{
    [seterror.type]: (state,action) => action.payload,
    [cleanerror.type]: null
    
   
})