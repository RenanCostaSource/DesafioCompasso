import { createAction, createReducer } from '@reduxjs/toolkit';
/**
 * Desafio Compasso UOL - 30/09/2020
 * Candidato: Renan Costa
 * Objetivo: cria reducer armazenar informações do usuário buscado
 * 
 * Histórico de Alteraçôes:
 * - 30/09/2020 Renan Costa Criação
 */
const INITIAL_STATE = null;

export const getuser = createAction('GET_USER');


export default createReducer(INITIAL_STATE, {
    [getuser.type]: (state, action) => action.payload


})