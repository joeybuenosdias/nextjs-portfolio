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
		--light-gradient: -webkit-linear-gradient(#0BD3D3, #78466F);

		--font-size-xs: 10px;
		--font-size-sm: 12px;
		--font-size-md: 14px;
		--font-size-lg: 16px;
		--font-size-xl: 18px;
	}

	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		width: 100vw;
		height: 100vh;
		font-family: 'Nunito', sans-serif;
		letter-spacing: 2px;
		line-height: 1.75em;
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
				<title>Joey Schrader Dev</title>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={activeTheme}>
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
