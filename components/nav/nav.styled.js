import styled from 'styled-components'

export const StyledNavContainer = styled.div`
	background: ${({ theme }) => theme.gradient};
	padding: 3px;
	width: 100%;
	box-sizing: border-box;
`

export const StyledNav = styled.nav`
	display: flex;
	justify-content: space-around;
	background: ${({ theme }) => theme.backgroundColor};
	padding: 1em 0;
`

export const StyledLink = styled.a`
	text-decoration: none;
	text-align: center;
	padding: 16px;
	
	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.hoverColor};
	}
`

export const StyledText = styled.div`
	background: ${({ theme }) => theme.gradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media (max-width: 414px) {
		font-size: var(--font-size-sm);
	}
`
