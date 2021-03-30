import { useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Nav, Header } from '@components'
import { darkMode, lightMode } from '@themes'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
	}
`

export default function App({ Component, pageProps }) {
	const [isDarkMode, setIsDarkMode] = useState(true)
	const activeTheme = isDarkMode ? darkMode : lightMode

	const body = (
		<>
			<GlobalStyle />
			<ThemeProvider theme={activeTheme}>
				<Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
				<Component {...pageProps} />
				<Nav />
			</ThemeProvider>
		</>
	)

	return (
		<>
			{body}
		</>
	)
}

App.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.object.isRequired,
}
