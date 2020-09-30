import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const getrepos = createAction('GET_REPOS');


export default createReducer(INITIAL_STATE,{
    [getrepos.type]: (state, action) => action.payload
    
   
})