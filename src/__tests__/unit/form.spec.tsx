import { render, screen } from '@testing-library/react'

import { HeroForm } from '@/components/form'

describe('Form', () => {
  it('renders the components', () => {
    render(<HeroForm />)

    const button = screen.getByText('Submit')
    const input = screen.getByPlaceholderText('Enter your name')

    expect(button).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })
})
