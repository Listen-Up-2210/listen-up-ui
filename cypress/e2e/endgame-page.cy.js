import { aliasQuery, aliasMutation } from '../utils/graphql-test-utils'
import gameplayTest from '../utils/gameplay-test'

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
    gameplayTest()
  })

  it.skip("should display how many quesitons a user got correct and a score", () => {
    cy.get('h2')
      .should('contain', 'You got 8 out of 8 questions correct!')
  })

  it.skip("should display a user's score", () => {
    cy.get('h3')
    .should('contain', 'You got a score of 800')
  })

  it.skip("should have a form to submit a users name", () => {
    cy.get('form')
      .should('be.visible')
    cy.get('input')
    .type('Hugh Jass')
  })

  it.only("should be able to submit the score", () => {
    cy.get('input')
      .type('Hugh Jass')
    cy.get('button')
      .should('contain', 'Submit')
      .click()
    cy.url()
      .should('eq','http://localhost:3000/')
    cy.intercept('POST', 'https://listen-up-be.herokuapp.com/graphql', (req) => {
        aliasMutation(req, 'createLeaderBoard')
        req.reply(
          {fixture:'newScoreEntry.json'}
        )
    })
    cy.intercept('POST', 'https://listen-up-be.herokuapp.com/graphql', (req) => {
      aliasQuery(req, 'getLeaderboards')
      req.reply(
        {fixture:'leaderboard.json'}
      )
    })
  })
})