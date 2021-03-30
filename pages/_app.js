import { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Nav, Header } from '@components'
import { darkMode, lightMode } from '@themes'

const GlobalStyle = createGlobalStyle`

	:root {
		--bg-dark: #333333;
		--bg-light: #ffffff;
	}

	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		width: 100vw;
		height: 100vh;
	}
`

const StyledLayout = styled.div`
	background-color: ${({ theme }) => theme.backgroundColor};
	height: 100vh;
`

export default function App({ Component, pageProps }) {
	const [isDarkMode, setIsDarkMode] = useState(true)
	const activeTheme = isDarkMode ? darkMode : lightMode

	const body = (
		<>
			<GlobalStyle />
			<ThemeProvider theme={activeTheme}>
				<StyledLayout>
					<Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
					<Component {...pageProps} />
					<Nav />
				</StyledLayout>
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
