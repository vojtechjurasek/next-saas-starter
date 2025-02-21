import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

import { HeroForm } from '@/components/form'

describe('Form', () => {
  it('renders the Components', () => {
    render(<HeroForm />)

    const button = screen.getByText('Submit', {
      selector: 'button',
    })

    expect(button).toBeInTheDocument()
  })
})
