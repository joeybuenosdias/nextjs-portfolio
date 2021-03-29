import { render, screen } from '@testing-library/react'
import { Home } from '@components'

describe('Home components tests', () => {
	it('renders the correct text', () => {
		const name = 'Joey Schrader'
		const title = 'Front End Engineer'
		render(<Home name={name} title={title} />)
		expect(screen.getByText(/joey schrader/i)).toBeInTheDocument()
	})
})
