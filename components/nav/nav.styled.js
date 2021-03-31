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
`

export const StyledLink = styled.a`
	text-decoration: none;
`
