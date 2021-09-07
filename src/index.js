import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { themeDark } from './theme'
import { ThemeProvider } from 'styled-components'
import './app.css'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeDark}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
