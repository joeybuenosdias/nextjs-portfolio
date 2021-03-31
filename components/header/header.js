import PropTypes from 'prop-types'
import { Toggle } from 'react-toggle-component'
import { StyledHeader } from './header.styled'

export default function Header({
	setIsDarkMode,
	isDarkMode,
}) {
	function handleToggle() {
		setIsDarkMode(!isDarkMode)
	}

	return (
		<StyledHeader>
			<Toggle
				name="theme-toggle"
				knobColor={isDarkMode ? '#333333' : '#fff'}
				onToggle={handleToggle}
				checked={isDarkMode}
				backgroundColor="#0BD3D3"
				borderColor="#0BD3D3"
				data-testid="toggle"
			/>
		</StyledHeader>
	)
}

Header.propTypes = {
	setIsDarkMode: PropTypes.func.isRequired,
	isDarkMode: PropTypes.bool.isRequired,
}
