import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('renderiza una texto hola', () => {
    render(<App />)
    screen.getAllByText('hola')
  })
})
