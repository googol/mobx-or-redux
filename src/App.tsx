import React from 'react'
import { ThemeProvider, GlobalStyle } from '@react95/core'
import '@react95/icons/icons.css'
import './App.css'
import { installReduxNotesApp } from './ReduxNotesApp'
import { installReduxNotesAppWithHelpers } from './ReduxNotesAppWithHelpers'

const ReduxNotesApp = installReduxNotesApp()
const ReduxNotesAppWithHelpers = installReduxNotesAppWithHelpers()

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <div className="App">
        <div>
          <h1>Redux</h1>
          <ReduxNotesApp />
        </div>
        <div>
          <h1>Redux with Helpers</h1>
          <ReduxNotesAppWithHelpers />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
