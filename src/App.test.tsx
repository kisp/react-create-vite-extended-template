import {render, screen} from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('shows a greeting', () => {
    render(<App />)

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/hello/i)
  })
})
