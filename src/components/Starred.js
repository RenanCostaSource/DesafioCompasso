import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Element } from 'react-scroll';
import { searchStarred } from '../store/fetchActions';
import repositoryicon from '../assets/img/repository_icon.png';
import staricon from '../assets/img/starred_icon.png';
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
 * Componente: Componente para a listagem de repositórios que o usuário buscado deu estrelas
 * Objetivo: Imprimir na lista de repositorios estrelados pelo usuário buscado
 * 
 * Histórico de Alteraçôes:
 * - 30/09/2020 Renan Costa Criação
 */
export default function Repositories() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const stars = useSelector(state => state.stars);
    useEffect(() => {
        dispatch(searchStarred(user.login));
    }, []);

    return (

        <Element className="repo_list" >
            {
                stars &&
                stars.map(star => (
                    <a className="link_theme_discreet" id={star.id} href={star.html_url}>
                        <Element name="firstInsideContainer" key={star.id} id={star.id} className="repo_list__item">

                            <p className="repo_list__text">
                                <img className="repo_list__img" src={repositoryicon} alt="Ícone de repositório" />
                                {star.full_name}
                                <p className="repo_list__description">{star.description}</p> 
                            </p>
                          
                            <p className="repo_list__text repo_list__text_thin">
                                <img src={staricon} alt="Ícone de visualizadores" className="repo_list__img repo_list__img_small" />
                                {star.stargazers_count}</p>
                        </Element>
                    </a>
                ))
            }
        </Element>

    )
}