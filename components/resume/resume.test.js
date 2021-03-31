import { render, screen } from '@testing-library/react'
import { Resume } from '@components'

describe('Resume Component Tests', () => {
	it('Renders resume correct sections', () => {
		render(<Resume />)
		expect(screen.getByText(/summary/i)).toBeInTheDocument()
		expect(screen.getByText(/skills/i)).toBeInTheDocument()
		expect(screen.getByText(/amazon/i)).toBeInTheDocument()
		expect(screen.getByText(/education/i)).toBeInTheDocument()
	})
})
