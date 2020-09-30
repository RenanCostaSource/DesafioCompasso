import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Perfil from './Perfil';
import repositoryicon from '../assets/img/repository_icon.png';
import starredicon from '../assets/img/starred_icon.png';
import '../assets/css/result.css';
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
            <div className="grayhead">
                <div className="namecontainer" >
                    <img src={user.avatar_url} alt="Imagem de Perfil" />
                    <span>{user.login}</span>
                </div>
                <div className="botoes">
                    <button>
                        <img src={repositoryicon} alt="Ícone de repositório" />
                        <p>Repositórios</p>
                        <div>{user.public_repos}</div>
                    </button>
                    <button>
                        <img src={starredicon} alt="Ícone de Starred" />
                        <p>Starred</p>
                    </button>
                </div>
            </div>

            <div className="whitebody">
                <Perfil />
            </div>
        </div>
    )
}