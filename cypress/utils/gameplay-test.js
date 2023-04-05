const gameplayTest = () => {
    cy.get('.turn-count').should('contain', 'Question: 1 / 8')
    cy.get('button')
      .filter(':contains("Cicada")')
      .click()

    cy.get('.turn-count')
      .should('contain', 'Question: 2 / 8')
    cy.get('button')
      .filter(':contains("Cicada")')
      .click()

    cy.get('.turn-count')
      .should('contain', 'Question: 3 / 8')
    cy.get('button')
      .filter(':contains("Cicada")')
      .click()

    cy.get('.turn-count')
      .should('contain', 'Question: 4 / 8')
    cy.get('button')
      .filter(':contains("Cicada")')
      .click()

    cy.get('.turn-count')
      .should('contain', 'Question: 5 / 8')
    cy.get('button')
      .filter(':contains("Cicada")')
      .click()

    cy.get('.turn-count')
      .should('contain', 'Question: 6 / 8')
    cy.get('button')
      .filter(':contains("Cicada")')
      .click()

    cy.get('.turn-count')
      .should('contain', 'Question: 7 / 8')
    cy.get('button')
      .filter(':contains("Cicada")')
      .click()

    cy.get('.turn-count')
      .should('contain', 'Question: 8 / 8')
    cy.get('button')
      .filter(':contains("Cicada")')
      .click()
}

export default gameplayTest