import {
	render,
	screen,
	fireEvent,
	act,
} from '@testing-library/react'
import { Header } from '@components'

describe('Header component tests', () => {
	it('renders the dark mode content', () => {
		const setIsDarkMode = jest.fn()
		render(<Header isDarkMode setIsDarkMode={setIsDarkMode} />)
		expect(screen.getByTestId(/toggle/i)).toBeInTheDocument()
		expect(screen.getByTestId(/moon/i)).toBeInTheDocument()

		const input = screen.getByTestId(/toggle/i).children[0]
		act(() => {
			fireEvent.click(input, { checked: false })
		})
	})

	it('renders light mode content', () => {
		const setIsDarkMode = jest.fn()
		render(<Header isDarkMode={false} setIsDarkMode={setIsDarkMode} />)
		expect(screen.getByTestId(/sun/i)).toBeInTheDocument()
	})
})
