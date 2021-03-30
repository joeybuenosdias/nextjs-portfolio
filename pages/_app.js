import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { Nav } from '@components'
import { darkMode, lightMode } from '@themes'

export default function App({ Component, pageProps }) {
	const { value: isDarkMode } = useDarkMode()
	const activeTheme = isDarkMode ? darkMode : lightMode

	console.log('isDarkMode', isDarkMode)
	console.log('darkMode', darkMode)
	console.log('lightMode', lightMode)
	return (
		<ThemeProvider theme={activeTheme}>
			<Component {...pageProps} />
			<Nav />
		</ThemeProvider>
	)
}

App.propTypes = {
	Component: PropTypes.object.isRequired,
	pageProps: PropTypes.string.isRequired,
}
