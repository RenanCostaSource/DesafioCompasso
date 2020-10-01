import { createAction, createReducer } from '@reduxjs/toolkit';
/**
 * Desafio Compasso UOL - 30/09/2020
 * Candidato: Renan Costa
 * Objetivo: cria reducer para informações de erro na requisição
 * 
 * Histórico de Alteraçôes:
 * - 30/09/2020 Renan Costa Criação
 */
const INITIAL_STATE = null;

export const seterror = createAction('SET_ERROR');
export const cleanerror = createAction('CLEAN_ERROR');


export default createReducer(INITIAL_STATE, {
    [seterror.type]: (state, action) => action.payload,
    [cleanerror.type]: null


})