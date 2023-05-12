export const leaderboardQuery = `
         query getLeaderboards {
            leaderboards {
              score
              category
              difficulty
              name
            }
          }
        `


export const createCardQuery = (deckID) => {
  return (
    `
      query {
        soundCard(deckId: ${deckID}) {
          category
          correctAnswer
          link
          wrongAnswers
        }
      }
    `
  )
}