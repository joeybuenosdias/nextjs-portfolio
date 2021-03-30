import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { Nav, Header } from '@components'
import { darkMode, lightMode } from '@themes'

export default function App({ Component, pageProps }) {
	const [isMounted, setIsMounted] = useState(false)
	const { value: isDarkMode } = useDarkMode()
	const activeTheme = isDarkMode ? darkMode : lightMode

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const body = (
		<ThemeProvider theme={activeTheme}>
			<Header />
			<Component {...pageProps} />
			<Nav />
		</ThemeProvider>
	)

	if (!isMounted) {
		<div style={{ visibility: 'hidden' }}>
			{body}
		</div>
	}

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
