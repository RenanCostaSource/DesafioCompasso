import api from '../../services/api';
import { getuser } from '../ducks/gituser';
import { getrepos } from '../ducks/gituserrepos';
import { getstarring } from '../ducks/gituserstars'
import { seterror, cleanerror } from '../ducks/fetcherror';

/**
 * Desafio Compasso UOL - 30/09/2020
 * Candidato: Renan Costa
 * Objetivo: Contém funções para requisições à API
 * 
 * Histórico de Alteraçôes:
 * - 30/09/2020 Renan Costa Criação
 */

export const searchUser = (user) => {

    return (dispatch) => {
        api.get(`/users/${user}`).then((res) => {
            dispatch(getuser(res.data));
        }).catch((error) => {
            if (error.response.status === 404) {
                dispatch(seterror("404 Não foi possível encontrar o usuário"));
            } else {
                dispatch(seterror(error.response.status));
            }
        })
    }
}


export const searchRepos = (user) => {

    return (dispatch) => {
        api.get(`/users/${user}/repos`).then((res) => {
            dispatch(getrepos(res.data));
        }).catch((error) => {
            if (error.response.status === 404) {
                dispatch(seterror("404 Não foi possível encontrar o usuário"));
            } else {
                dispatch(seterror(error.response.status));
            }
        })
    }
}

//ordena repositórios em ordem decrescente de estrelamento
const sortStars = (a, b) => {
    if (a.stargazers_count < b.stargazers_count) {
        return 1;
    }
    if (a.stargazers_count > b.stargazers_count) {
        return -1;
    }
    return 0;
}
export const searchStarred = (user) => {

    return (dispatch) => {
        api.get(`/users/${user}/starred`).then((res) => {
            let ordered = res.data.sort(sortStars);
            dispatch(getstarring(ordered));
        }).catch((error) => {
            if (error.response.status === 404) {
                dispatch(seterror("404 Não foi possível encontrar o usuário"));
            } else {
                dispatch(seterror(error.response.status));
            }
        })
    }
}

export const cleanError = () => {
    return (dispatch) => {
        dispatch(cleanerror());
    }
}