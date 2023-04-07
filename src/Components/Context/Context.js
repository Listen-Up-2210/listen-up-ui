import React, { createContext, useState } from 'react';

export const gameContext = createContext()
export const setGameContext = createContext()
export const darkContext = createContext()
export const setDarkContext = createContext()

export default function Context(props) {

  const [gameEnded, setGameEnded] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return(
    <gameContext.Provider value={gameEnded}>
      <setGameContext.Provider value={setGameEnded}>
        <darkContext.Provider value={darkMode}>
          <setDarkContext.Provider value={setDarkMode}>
            {props.children}
          </setDarkContext.Provider>
        </darkContext.Provider>
      </setGameContext.Provider>
    </gameContext.Provider>
  )
}
