import styled from 'styled-components'

export const StyledNavContainer = styled.div`
	background: ${({ theme }) => theme.gradient};
	padding: 3px;
	position: fixed;
	bottom: 0;
	width: 100%;
	box-sizing: border-box;
`

export const StyledNav = styled.nav`
	display: flex;
	justify-content: space-around;
	background: ${({ theme }) => theme.backgroundColor};
	padding: 1.5em 0;
`

export const StyledLink = styled.a`
	text-decoration: none;
	text-align: center;
`

export const StyledText = styled.div`
	background: ${({ theme }) => theme.gradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`
