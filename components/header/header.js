import PropTypes from 'prop-types'
import Image from 'next/image'
import { Toggle } from 'react-toggle-component'
import {
	StyledHeader,
	StyledLabel,
	StyledModeWrapper,
} from './header.styled'

export default function Header({
	setIsDarkMode,
	isDarkMode,
}) {
	function handleToggle() {
		setIsDarkMode(!isDarkMode)
	}

	return (
		<StyledHeader>
			{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
			<StyledLabel htmlFor="theme-toggle">
				<ModeIcon isDarkMode={isDarkMode} />
				<Toggle
					name="theme-toggle"
					knobColor={isDarkMode ? '#333333' : '#fff'}
					onToggle={handleToggle}
					checked={isDarkMode}
					backgroundColor="#0BD3D3"
					borderColor="#0BD3D3"
					data-testid="toggle"
				/>
			</StyledLabel>
		</StyledHeader>
	)
}

Header.propTypes = {
	setIsDarkMode: PropTypes.func.isRequired,
	isDarkMode: PropTypes.bool.isRequired,
}

function ModeIcon({ isDarkMode }) {
	if (isDarkMode) {
		return (
			<StyledModeWrapper>
				<Image
					alt="Moon and stars"
					src="/moon.svg"
					width={12}
					height={12}
					data-testid="moon"
				/>
			</StyledModeWrapper>
		)
	}

	return (
		<StyledModeWrapper>
			<Image
				alt="Sun"
				src="/sun.svg"
				width={14}
				height={14}
				data-testid="sun"
			/>
		</StyledModeWrapper>
	)
}

ModeIcon.propTypes = {
	isDarkMode: PropTypes.bool.isRequired,
}
