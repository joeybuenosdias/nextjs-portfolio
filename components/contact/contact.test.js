import { render, screen } from '@testing-library/react'
import { Contact } from '@components'

describe('Contact component tests', () => {
	it('renders correct usernames', () => {
		render(<Contact />)
		expect(screen.getByText(/mojocodeio/i)).toBeInTheDocument()
		expect(screen.getAllByText(/joey_mojocode/i).length).toEqual(2)
		expect(screen.getByText(/joey schrader/i)).toBeInTheDocument()
		expect(screen.getByText(/jbone/i)).toBeInTheDocument()
		expect(screen.getByText(/mojo code/i)).toBeInTheDocument()
	})
})
