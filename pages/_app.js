import { useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { GoogleFonts } from 'next-google-fonts'
import { Nav, Header } from '@components'
import { darkMode, lightMode } from '@themes'

const GlobalStyle = createGlobalStyle`

	:root {
		--dark-bg: #333333;
		--dark-font-color: #F2F2F2;
		--dark-gradient: -webkit-linear-gradient(#0BD3D3, #DE81CE);

		--light-bg: #F2F2F2;
		--light-font-color: #4F4F4F;
		--light-hover-color: #E0E0E0;
		--light-gradient: -webkit-linear-gradient(#0BD3D3, #78466F);

		--font-size-xs: 10px;
		--font-size-sm: 12px;
		--font-size-md: 14px;
		--font-size-lg: 16px;
		--font-size-xl: 18px;
	}

	body {
		margin: 0 auto;
		padding: 0;
		box-sizing: border-box;
		width: 100vw;
		height: 100vh;
		font-family: 'Nunito', sans-serif;
		letter-spacing: 2px;
		line-height: 1.75em;
		background-color: ${({ theme }) => theme.backgroundColor};
		max-width: 1000px;
	}
`

const StyledLayout = styled.div`
	background-color: ${({ theme }) => theme.backgroundColor};
	height: 100vh;
	display: flex;
	flex-direction: column;
`

const StyledPageContent = styled.div`
	flex-grow: 1;
	overflow: scroll;
`

export default function App({ Component, pageProps }) {
	const [isDarkMode, setIsDarkMode] = useState(true)
	const activeTheme = isDarkMode ? darkMode : lightMode

	const body = (
		<>
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" />
			<Head>
				<title>Joey Schrader | Front End Engineer</title>
				<link rel="manifest" crossOrigin="use-credentials" href="/manifest.json" />
				<link rel="icon" href="/beach16.png" sizes="16x16" />
				<link rel="icon" href="/beach48.png" sizes="48x48" />
				<link rel="icon" href="/beach128.png" sizes="128x128" />
				<link rel="icon" href="/beach192.png" sizes="192x192" />
				<link rel="icon" href="/beach512.png" sizes="512x512" />
			</Head>
			<ThemeProvider theme={activeTheme}>
				<GlobalStyle />
				<StyledLayout>
					<Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
					<StyledPageContent>
						<Component {...pageProps} />
					</StyledPageContent>
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
