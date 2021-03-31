import { render, screen } from '@testing-library/react'
import { Header } from '@components'

describe('Header component tests', () => {
	it('renders the dark mode content', () => {
		render(<Header isDarkMode setIsDarkMode={jest.fn()} />)
		expect(screen.getByTestId(/toggle/i)).toBeInTheDocument()
	})
})
