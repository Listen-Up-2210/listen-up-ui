import { aliasQuery } from '../utils/graphql-test-utils'

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/animals')
  })
  
  it('should have a url that contains the category', () => {
    cy.url()
      .should('contain', 'animals')
  })

  it('should display three difficulty selections', () => {
    cy.get('.difficulties')
      .children()
      .should('have.length', 3)
      .get('.easy')
      .should('contain', 'Easy')
      .get('.medium')
      .should('contain', 'Medium')
      .get('.hard')
      .should('contain', 'Hard')
  })

  it('should be able to open & close the instructions modal', () => {
    cy.get('img[alt="instructions"]')
      .click()
    cy.get('.modal-main > h2')
      .should('contain', 'How To Play')
    cy.get('.close-Btn')
      .click()
  })

  it('should be able to open & close the leaderboard modal', () => {
    cy.intercept('POST', 'https://listen-up-be.herokuapp.com/graphql', (req) => {
      aliasQuery(req, 'getLeaderboards')
      req.reply(
        {fixture:'leaderboard.json'}
      )
    })
    cy.get('img[alt="leaderboard"]')
      .click()
    cy.get('.modal-header')
      .should('contain', 'Leaderboard Content')
    cy.get('.close-Btn')
      .click()
  })

  it('should be able to click on a difficulty', () => {
    cy.get('.easy')
      .click()
  })

  it('should be taken to a new page after selecting a difficulty', () => {
    cy.get('.easy')
    .click() 
    cy.intercept('POST', 'https://listen-up-be.herokuapp.com/graphql', (req) => {
      aliasQuery(req, '')
      req.reply(
        {fixture:'soundCard.json'}
      )
    })
    cy.url()
      .should('eq','http://localhost:3000/animals/easy')
      .should('contain', 'animals')
      .should('contain', 'easy')
    cy.get('.turn-count').should('contain', 'Question: 1 / 8')
    cy.get('.choices-container').children()
    .should('have.length', 4)
    .should('contain', 'Cicada')
    .should('contain', 'monkey')
    .should('contain', 'cricket')
    .should('contain', 'monkey')
  })
})