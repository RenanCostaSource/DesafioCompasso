import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Perfil from './Perfil';
import Repositories from './Repositories';
import Starred from './Starred';
import repositoryicon from '../assets/img/repository_icon.png';
import starredicon from '../assets/img/starred_icon.png';
import '../assets/css/result_header/result_header.css';
import '../assets/css/result_header/_button/result_header__button.css';
import '../assets/css/result_header/__button_container/result_header__button_container.css';
import '../assets/css/result_header/__button_counter/result_header__button_counter.css';
import '../assets/css/result_header/__button_image/result_header__button_image.css';
import '../assets/css/result_header/__button_text/result_header__button_text.css';
import '../assets/css/result_header/__image/result_header__image.css';
import '../assets/css/result_header/__name_container/result_header__name_container.css';
import '../assets/css/theme/link_theme_discreet.css';
import '../assets/css/result_body/result_body.css';

/**
 * Desafio Compasso UOL - 30/09/2020
 * Candidato: Renan Costa
 * Componente: Componente contendo a foto e id do usuário buscado, assim como, botões para visualizar os componentes de listagem de repositórioa
 * Objetivo: Imprimir na tela a foto e id do usuário buscado e fornecer botões para visualização das listas de repositórios
 * 
 * Histórico de Alteraçôes:
 * - 30/09/2020 Renan Costa Criação
 */
export default function Result() {
    const user = useSelector(state => state.user);
    const [selected, setSelected] = useState(0);

    const changeSelected = (index) => {
        if (index !== selected) {
            setSelected(index);
        } else {
            setSelected(0);
        }
    }
    return (
        <div>
            <div className="result_header">
                <div className="result_header__name_container" >
                    <a className="link_theme_discreet" href={user.html_url}>
                        <img className="result_header__image" src={user.avatar_url} alt="Imagem de Perfil" />
                        <span>{user.login}</span>
                    </a>
                </div>
                <div className="result_header__button_container">
                    <button className="result_header__button" id="repobutton" onClick={() => changeSelected(1)}>
                        <img className="result_header__button_image" src={repositoryicon} alt="Ícone de repositório" />
                        <p className="result_header__button_text">Repositórios</p>
                        <div className="result_header__button_counter">{user.public_repos}</div>
                    </button>
                    <button className="result_header__button" id="starbutton" onClick={() => changeSelected(2)}>
                        <img className="result_header__button_image" src={starredicon} alt="Ícone de Starred" />
                        <p className="result_header__button_text">Starred</p>
                    </button>
                </div>
            </div>

            <div className="result_body">
                {selected === 0 &&
                    <Perfil />
                }
                {selected === 1 &&
                    <Repositories />
                }
                {selected === 2 &&
                    <Starred />
                }
            </div>
        </div>
    )
}