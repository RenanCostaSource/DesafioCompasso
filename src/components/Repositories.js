import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Element } from 'react-scroll';
import { searchRepos } from '../store/fetchActions';
import repositoryicon from '../assets/img/repository_icon.png';
import watchicon from '../assets/img/watch_icon.png';
import '../assets/css/repo_list/repo_list.css';
import '../assets/css/repo_list/__img/repo_list__img.css';
import '../assets/css/repo_list/__img/__small/repo_list__img_small.css';
import '../assets/css/repo_list/__item/repo_list__item.css';
import '../assets/css/repo_list/__text/repo_list__text.css';
import '../assets/css/repo_list/__text/__thin/repo_list__text_thin.css';
import '../assets/css/repo_list/__description/repo_list__description.css';
import '../assets/css/theme/link_theme_discreet.css';

/**
 * Desafio Compasso UOL - 30/09/2020
 * Candidato: Renan Costa
 * Componente: Componente de listagem de repositórios pertencentes ao perfil
 * Objetivo: Imprimir na tela uma lista contendo os repositórios do usuário buscado
 * 
 * Histórico de Alteraçôes:
 * - 30/09/2020 Renan Costa Criação
 */
export default function Repositories() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const repos = useSelector(state => state.repos);
    useEffect(() => {
        dispatch(searchRepos(user.login));
    }, []);
    return (

        <Element className="repo_list" >
            {
                repos &&
                repos.map(repo => (
                    <a className="link_theme_discreet" id={repo.id} href={repo.html_url}>
                        <Element key={repo.id} id={repo.id} className="repo_list__item" >

                            <p className="repo_list__text">
                                <img className="repo_list__img" src={repositoryicon} alt="Ícone de repositório" />
                                {repo.name}
                                <p className="repo_list__description">{repo.description}</p>    
                            </p>

                            <p className="repo_list__text repo_list__text_thin">
                                <img className="repo_list__img repo_list__img_small " src={watchicon} alt="Ícone de visualizadores" />
                                {repo.watchers}</p>
                        </Element>
                    </a>
                ))
            }
        </Element>

    )
}