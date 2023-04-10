import React, { createContext, useState } from 'react';

export const gameContext = createContext()
export const setGameContext = createContext()

export default function Context(props) {

  const [gameEnded, setGameEnded] = useState(false)

  return(
    <gameContext.Provider value={gameEnded}>
      <setGameContext.Provider value={setGameEnded}>
              {props.children}    
      </setGameContext.Provider>
    </gameContext.Provider>
  )
}
