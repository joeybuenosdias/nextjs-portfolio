import PropTypes from 'prop-types'
import { StyledButton } from './header.styled'

export default function Header({
	setIsDarkMode,
	isDarkMode,
}) {
	function handleToggle() {
		setIsDarkMode(!isDarkMode)
	}

	return (
		<div>
			<StyledButton onClick={handleToggle} type="button">Toggle Theme</StyledButton>
		</div>
	)
}

Header.propTypes = {
	setIsDarkMode: PropTypes.func.isRequired,
	isDarkMode: PropTypes.bool.isRequired,
}
