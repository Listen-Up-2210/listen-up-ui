export const createCategoryQuery = (location) => {
    return (
      `
        mutation createDeck {
            createDeck(input: {
                category: "${location}"
            }) 
            {
                deck {
                    id
                }
            }
        }
      `
    )
  }