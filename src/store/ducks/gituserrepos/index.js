import { createAction, createReducer } from '@reduxjs/toolkit';
/**
 * Desafio Compasso UOL - 30/09/2020
 * Candidato: Renan Costa
 * Objetivo: cria reducer armazenar informações dos repositórios do usuário buscado
 * 
 * Histórico de Alteraçôes:
 * - 30/09/2020 Renan Costa Criação
 */
const INITIAL_STATE = [];

export const getrepos = createAction('GET_REPOS');


export default createReducer(INITIAL_STATE, {
    [getrepos.type]: (state, action) => action.payload


})