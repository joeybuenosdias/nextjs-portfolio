import styled from 'styled-components'

export const StyledResumeContainer = styled.div`
	background: ${({ theme }) => theme.gradient};
	padding: 3px;
	width: 100%;
	box-sizing: border-box;
`

export const StyledResume = styled.nav`
	background: ${({ theme }) => theme.backgroundColor};
`

export const StyledSection = styled.section`
	padding: 16px;
	background-color: ${({ theme }) => theme.backgroundColor};
	color: ${({ theme }) => theme.fontColor};
`
