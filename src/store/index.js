import { configureStore } from '@reduxjs/toolkit';

import user from './ducks/gituser';
import repos from './ducks/gituserrepos';
import stars from './ducks/gituserstars';
import fetcherror from './ducks/fetcherror';

/**
 * Desafio Compasso UOL - 30/09/2020
 * Candidato: Renan Costa
 * Objetivo: combina os reducers para fazerem parte da store
 * 
 * Histórico de Alteraçôes:
 * - 30/09/2020 Renan Costa Criação
 */

export default configureStore({
    reducer: {
        user,
        repos,
        stars,
        fetcherror
    }
});