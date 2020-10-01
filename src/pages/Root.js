import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanError, searchUser } from '../store/fetchActions/index';
import Result from '../components/Result'
import gitlogo from '../assets/img/github_icon.png'
import '../assets/css/global.css';
import '../assets/css/root/root.css';
import '../assets/css/navbar/navbar.css';
import '../assets/css/navbar/__button/navbar__button.css';
import '../assets/css/navbar/__image/navbar__image.css';
import '../assets/css/navbar/__input/navbar__input.css';
import '../assets/css/navbar/__searchicon/navbar__searchicon.css';

/**
 * Desafio Compasso UOL - 30/09/2020
 * Candidato: Renan Costa
 * Componente: Página raiz do aplicativo
 * Objetivo: Servir como container para os componentes e para o cabeçalho onde fica a pesquisa
 * 
 * Histórico de Alteraçôes:
 * - 30/09/2020 Renan Costa Criação
 */


export default function GeneratorHome() {

    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [resultVazio, setresultVazio] = useState(false);
    const user = useSelector(state => state.user);
    const fetcherror = useSelector(state => state.fetcherror);


    useEffect(() => {
        if (fetcherror) {

            setresultVazio(true);
            dispatch(cleanError());
        }
    }, [fetcherror]);

    //caso houver um parametro no url e não ter nenhum dado de usuário no state realiza a pesquisa
    useEffect(() => {
        var urlparam = window.location.pathname.substring(1);
        console.log("window location", window.location.pathname);
        if (urlparam.length > 0 && user === null) {
            dispatch(searchUser(urlparam));
        }

    }, []);
    const changeQuery = (event) => {
        setQuery(event.target.value);

    }
    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            queryClick();
        }
    }
    const queryClick = () => {
        if (query.length === 0) {
            alert("Favor informar ID do usuário a ser localizado.");
        } else {
            setresultVazio(false);
            window.location.pathname = `/${query}`;
        }


    }
    return (
        <div>
            <nav className="navbar">
                <a href="https://github.com/"><img className="navbar__image" src={gitlogo} alt="Ícone do GitHub" /></a>
                <input className="navbar__input" onChange={changeQuery} onKeyDown={_handleKeyDown} placeholder="Pesquisar usuário GitHub"></input>
                <button className="navbar__button" onClick={queryClick}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="navbar__searchicon" fill="lightgray" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                    </svg>
                </button>

            </nav>

            {user ? <Result /> :
                <div className="root">
                    {resultVazio ?
                        <div>
                            <svg width="2em" height="2em" viewBox="0 0 16 16" fill="lightgray" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg>
                            <h3><b>Nenhum Resultado foi encontrado.</b></h3><br />
                            <p>Pesquise por outro usuário.</p>
                        </div>
                        :
                        <div>
                            <h3><b>Nenhum Resultado ainda.</b></h3><br />
                            <p>Utilize o campo no cabeçalho para fazer uma pesquisa.</p>
                        </div>
                    }
                </div>
            }

        </div>
    );
}