import { useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { GoogleFonts } from 'next-google-fonts'
import { Nav, Header } from '@components'
import { darkMode, lightMode } from '@themes'

const GlobalStyle = createGlobalStyle`

	:root {
		--bg-dark: #333333;
		--bg-light: #ffffff;
		--primary-gradient: linear-gradient(#0BD3D3, #F890E7);
	}

	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		width: 100vw;
		height: 100vh;
		font-family: 'Nunito', sans-serif;
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
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" />
			<Head>
				<title>Joey Schrader Dev</title>
			</Head>
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
