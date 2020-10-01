import axios from 'axios';
/**
 * Desafio Compasso UOL - 30/09/2020
 * Candidato: Renan Costa
 * Componente: função para criação do objeto do axios para as requisições à API
 * Objetivo: cria objeto axios para ser utilizado nas requisições
 * 
 * Histórico de Alteraçôes:
 * - 30/09/2020 Renan Costa Criação
 */
export default axios.create({
    baseURL: 'https://api.github.com/'
});