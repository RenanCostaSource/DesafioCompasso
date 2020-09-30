import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert'
import { cleanError, searchUser } from '../store/fetchActions/index';
import Result from '../components/Result'
import gitlogo from '../assets/img/github_icon.png'
import '../assets/css/global.css';
import '../assets/css/root.css';




export default function GeneratorHome() {
    const alert=useAlert();
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const user = useSelector(state => state.user);
    const fetcherror = useSelector(state => state.fetcherror);

    //caso haja algum erro reportado no state cria um alerta e remove o erro do state para evitar múltiplos avisos
    useEffect(() => {     
        if(fetcherror)
        {
            
            alert.show("ERRO: "+fetcherror);
            dispatch(cleanError());
        }
       }, [fetcherror]);

       //caso houver um parametro no url e não ter nenhum dado de usuário no state realiza a pesquisa
       useEffect(() => {   
           var urlparam=  window.location.pathname.substring(1);
           
           if(urlparam.length>0&&user===null){
            dispatch(searchUser(urlparam));
           }
        
       }, []);
    const changeQuery = (event) => {
        setQuery(event.target.value);
        
    }
    const _handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
          queryClick();
        }
      }
    const queryClick = () => {
        dispatch(searchUser(query));
        
    }
    return (
        <div>
            <nav className="navbar">
                <a href="https://github.com/"><img src={gitlogo} alt="Ícone do GitHub"/></a>
                <input onChange={changeQuery} onKeyDown={_handleKeyDown} placeholder="Pesquisar usuário GitHub"></input>
                <button onClick={queryClick}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search searchicon" fill="lightgray" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                    </svg>
                </button>

            </nav>
            
                {user ? <Result /> : <div className="corpo">Nada a mostrar</div>}
            
        </div>
    );
}