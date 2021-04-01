import { render, screen } from '@testing-library/react'
import { Nav } from '@components'

describe('Header component tests', () => {
	it('renders the dark mode content', () => {
		render(<Nav />)
		expect(screen.getByText(/home/i)).toBeInTheDocument()
		expect(screen.getByText(/resume/i)).toBeInTheDocument()
		expect(screen.getByText(/contact/i)).toBeInTheDocument()
	})
})
