import useDarkMode from 'use-dark-mode'
import { StyledButton } from './header.styled'

export default function Header() {
	const { toggle, value } = useDarkMode()
	console.log(value)

	return (
		<div>
			<StyledButton onClick={toggle} type="button">Toggle Theme</StyledButton>
		</div>
	)
}
