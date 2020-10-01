import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/css/perfil_table/perfil_table.css';

/**
 * Desafio Compasso UOL - 30/09/2020
 * Candidato: Renan Costa
 * Componente: Componente de informações sobre o usuário
 * Objetivo: Imprimir na tela dados sobre o perfil caso tenham sido cadastrados no github
 * 
 * Histórico de Alteraçôes:
 * - 30/09/2020 Renan Costa Criação
 */
export default function Perfil() {
    const user = useSelector(state => state.user);
    return (
        <div>
            <table className="perfil_table">
                <tbody>
                    {user.name ? <tr>
                        <th>Nome:</th>
                        <td>{user.name}</td>
                    </tr> : <div />}
                    {user.company ? <tr>
                        <th>Empresa:</th>
                        <td>{user.company}</td>
                    </tr> : <div />}
                    {user.blog ? <tr>
                        <th>Blog:</th>
                        <td>{user.blog}</td>
                    </tr> : <div />}
                    {user.location ? <tr>
                        <th>Localização:</th>
                        <td>{user.location}</td>
                    </tr> : <div />}
                </tbody>
            </table>
        </div>
    )
}