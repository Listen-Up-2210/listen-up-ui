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