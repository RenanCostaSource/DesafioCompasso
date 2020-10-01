const url = "http://localhost:3000/";

describe('1. Ativação Direto pela URL', () => {
    it('1.1 Usando um usuário existente', () => {
        cy.visit(url+"fabpot");
        cy.contains('fabpot');
    })
    it('1.2 Usando um usuário inexistente', () => {
        cy.visit(url+"essenaoexistenogithub");
        cy.contains('Nenhum Resultado foi encontrado.')
    })
    it('1.3 Sem fornecer usuário', () => {
        cy.visit(url);
        cy.contains('Nenhum Resultado ainda.');
    })
  })
 
  describe('2. Campo de Busca', () => {
    it('2.1 Usando um usuário existente', () => {
        cy.visit(url);
        cy.get('.navbar > input').type('fabpot');
        cy.get('.navbar > button').click();
        cy.url().should('include', '/fabpot');
        cy.contains('fabpot');
    })
    it('2.2 Usando um usuário inexistente', () => {
        cy.visit(url);
        cy.get('.navbar > input').type('essenaoexistenogithub');
        cy.get('.navbar > button').click();
        cy.url().should('include', '/essenaoexistenogithub');
        cy.contains('Nenhum Resultado foi encontrado.')
    })
    it('2.3 Sem fornecer usuário', () => {
        cy.visit(url);
        cy.get('.navbar > button').click();
        cy.contains('Nenhum Resultado ainda.');
    })
  })
  describe('3. Botão Repos', () => {
    it('3.1 Mostrar repositorios', () => {
        cy.visit(url+"fabpot");
        cy.contains('Repositórios').click();
        cy.get('.repo_list');
    })
  })
  describe('3. Botão Starred', () => {
    it('3.1 Mostrar repositorios com estrela', () => {
        cy.visit(url+"fabpot");
        cy.contains('Starred').click();
        cy.get('.repo_list');
    })
  })

  describe('5. Links', () => {
    it('5.1 Link para página do usuário', () => {
        cy.visit(url+"fabpot");
        cy.get('.result_header__name_container > a').should('have.attr', 'href').and('eq', 'https://github.com/fabpot');
    })
    it('5.2 Link para página de repositório', () => {
      cy.visit(url+"fabpot");
      cy.contains('Repositórios').click();
      cy.get('a[id=237386698]').should('have.attr', 'href').and('eq', 'https://github.com/fabpot/.github');
  })
  it('5.3 Link para página de repositório com estrela', () => {
    cy.visit(url+"fabpot");
    cy.contains('Starred').click();
    cy.get('a[id=6936773]').should('have.attr', 'href').and('eq', 'https://github.com/php-fig/log');
})
  })