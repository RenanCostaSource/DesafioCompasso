import { createAction, createReducer } from '@reduxjs/toolkit';
/**
 * Desafio Compasso UOL - 30/09/2020
 * Candidato: Renan Costa
 * Objetivo: cria reducer armazenar informações dos repositórios que receberam estrela pelo usuário buscado
 * 
 * Histórico de Alteraçôes:
 * - 30/09/2020 Renan Costa Criação
 */
const INITIAL_STATE = [];

export const getstarring = createAction('GET_STARRING');


export default createReducer(INITIAL_STATE, {
    [getstarring.type]: (state, action) => action.payload


})