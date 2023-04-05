import { aliasQuery } from '../utils/graphql-test-utils'

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('POST', 'https://listen-up-be.herokuapp.com/graphql', (req) => {
      aliasQuery(req, 'getLeaderboards')
      req.reply(
        {fixture:'leaderboard.json'}
      )
    })
  })
  
  it('should have an instruction modal visible on-load', () => {
    cy.get('.modal-main')
      .should('be.visible')
  })

  it('should display "How To Play" in the modal ', () => {
    cy.get('.modal-main > h2')
      .should('contain', 'How To Play')
  })

  it('should have an ordered list with 3 instructions', () => {
    cy.get('.modal-main > ol')
    .children()
    .find('li')
    .should('have.length', 3)
    .get('[data-cy="step-1"]')
    .should('contain', 'Choose a category of sounds that you want to play with.')
    .get('[data-cy="step-2"]')
    .should('contain', 'Choose a difficulty level that you are comfortable with.')
    .get('[data-cy="step-3"]')
    .should('contain', 'After you have guessed all eight sounds, your score will be displayed.')
  })

  it('should have an unorderd list that explains difficulties', () => {
    cy.get('.modal-main > ol')
    .find('ul')
    .children()
    .should('have.length', 3)
    .get('[data-cy="easy"]')
    .should('contain', 'Easy: 3 guesses per sound')
    .get('[data-cy="medium"]')
    .should('contain', 'Medium: 2 guesses per sound')
    .get('[data-cy="hard"]')
    .should('contain', 'Hard: 1 guess per sound')
  })

  it('should have a button to close the modal', () => {
    cy.get('.close-Btn')
      .should('be.visible')
  })

  it('should close the modal when the button is clicked ', () => {
    cy.get('.close-Btn')
      .click()
    cy.get('.modal-main')
      .should('not.be.visible')
  })

  it('should display a "Listen Up" header',() => {
    cy.get('.close-Btn')
      .click()
    cy.get('.header > h1')
      .should('contain', 'Listen Up!')
  })

  it('should have an info and stats button in the header',() => {
    cy.get('.close-Btn')
      .click()
    cy.get('.modal-icons-container')
      .get('img[alt="instructions"]')
      .should('be.visible')
      .get('img[alt="leaderboard"]')
      .should('be.visible')
  })

  it('should display the instructions modal when the button is clicked', () => {
    cy.get('.close-Btn')
      .click()
    cy.get('.modal-icons-container')
      .get('img[alt="instructions"]')
      .click()
    cy.get('.modal-main > h2')
      .should('contain', 'How To Play')
  })

  it('should display the leaderboard modal when the button is clicked', () => {
    cy.get('.close-Btn')
      .click()
    cy.get('.modal-icons-container')
      .get('img[alt="leaderboard"]')
      .click()
    cy.get('.modal-header > h2')
      .should('contain', 'Leaderboard Content')
  })

  it("should display users in the leaderboard", () => {
    cy.get('.close-Btn')
      .click()
    cy.get('.modal-icons-container')
      .get('img[alt="leaderboard"]')
      .click() 
    cy.get('tbody')
    .should('contain', 'Lance Lyde')
    .should('contain', 'Hammond Eggs')
    .should('contain', 'Tom Katz')
  })

  it('should have four categories displayed',() => {
    cy.get('.close-Btn')
      .click()
      .get('.categories')
      .children()
      .should('have.length', 4)
  })

  it('should have the correct text in each category button', () => {
    cy.get('.close-Btn')
      .click()
      .get('a[href="/animals"]')
        .should('contain', 'Animals')
      .get('a[href="/instruments"]')
        .should('contain', 'Instruments')
      .get('a[href="/machines"]')
        .should('contain', 'Machines')
      .get('a[href="/misc"]')
        .should('contain', 'Miscellaneous')
  })

  it('should take a user to the difficulty page when a category is selected',() => {
    cy.get('.close-Btn')
      .click()
      .get('a[href="/animals"]')
      .click()
    cy.url()
      .should('eq','http://localhost:3000/animals')
      .should('contain', 'animals')
  })
})