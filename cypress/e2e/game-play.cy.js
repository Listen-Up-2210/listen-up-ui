import { aliasQuery } from '../utils/graphql-test-utils'

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/animals')
    cy.get('.easy')
    .click()
    cy.intercept('POST', 'https://listen-up-be.herokuapp.com/graphql', (req) => {
      aliasQuery(req, '')
      req.reply(
        {fixture:'soundCard.json'}
      )
    })
  })

  it('should allow the user to play all 8 questions and then display a score', () => {
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
  })

})