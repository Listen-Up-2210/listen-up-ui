export const getData = (queryType) => {
    return fetch("https://listen-up-be.herokuapp.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            query: queryType
          })
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Something went wrong')
            }
            return res.json()
        })
}