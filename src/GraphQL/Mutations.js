export const createCategoryQuery = (location, difficulty) => {
  return `
        mutation createDeck {
            createDeck(input: {
                category: "${location}",
                difficulty: "${difficulty}"
            }) 
            {
                deck {
                    id
                }
            }
        }
      `;
};

export const createEndgameQuery = (name, score, category, difficulty) => {
  return `
        mutation createLeaderBoard {
            createLeaderboard(input: {
                name: "${name}"
                score: ${score}
                category: "${category}"
                difficulty: "${difficulty}"
            }) 
            {
                leaderboard {
                    name
                    score
                    difficulty
                    category
                }
                errors
            }
        }
      `;
};
