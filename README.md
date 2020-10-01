


TESTE FRONTEND COMPASSO  
---------------------------------------------  
**Candidato:** Renan Costa  
**Contato:** renan.paiva@lavid.ufpb.br - (83) 99133-6770  
**Data:** 30/09/2020  
  
Este projeto foi desenvolvido como teste prático para candidatura ao  
cargo de frontend na COMPASSO.  
  
### Objetivo:  
Implementação de uma aplicação utilizando a api do GITHUB  ([https://developer.github.com/v3/](https://developer.github.com/v3/)) para consumo dos seguintes  endpoints:  
- Endpoint user: [https://api.github.com/users/USER_GITHUB](https://api.github.com/users/USER_GITHUB)  
- Endpoint repos: [https://api.github.com/users/USER_GITHUB/repos](https://api.github.com/users/USER_GITHUB/repos)  
- Endpoint starred:  [https://api.github.com/users/USER_GITHUB/starred{/owner}{/repo}](https://api.github.com/users/USER_GITHUB/starred%7B/owner%7D%7B/repo%7D)  
  
A aplicação contém três componentes principais:  
- campo de busca;  
- área de visualização de resultados;  
- dois botões para detalhar um determinado resultado: repos e starred.  
  
E oferece as seguintes funcionalidades:  
- Pesquisar por usuário;  
- Listar os repositórios do usuário pesquisado;  
- Listar os repositórios mais visitados pelo usuário pesquisado.  
  
Stack Utilizada:  
- HTML 5 ;  
- JAVASCRIPT (REACTJS + REDUX);  
- CSS 3 (BEM CSS).  
  
Outras decisões de projeto:  
- Implementação do testes com a ferramenta CYPRESS (https://www.cypress.io/);  
- Aplicação Metodologia BEM CSS (Referência utilizada: https://en.bem.info/);  
- Aplicação de boas práticas JAVASCRIPT/REACTJS (Referência utilizada: https://www.smashingmagazine.com/2020/04/react-hooks-best-practices/);  
- Aplicação de boas práticas HTML 5 (Referência utilizada: themelocation.com/best-html5-practices/).
## Plano de Testes
1. Ativação Direto pela URL:
1.1 Usando um usuário existente
1.2 Usando um usuário inexistente
1.3 Sem fornecer usuário

2. Campo de Busca
2.1 Usando um usuário existente
2.2 Usando um usuário inexistente
2.3 Sem fornecer usuário

3. Botão Repos 

4. Botão Starred

5. Links Nome Usuário
5.1 Links Nome Usuário
5.2 Link Repositório da Lista Repositório
5.3 Link Repositório da Lista Starred

## Execução dos testes no Cypress

![alt text](https://github.com/RenanCostaSource/DesafioCompasso/blob/master/cypress.gif?raw=true)
