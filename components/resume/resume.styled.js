import styled from 'styled-components'

export const StyledResumeContainer = styled.div`
	background: ${({ theme }) => theme.gradient};
	padding: 3px;
	width: 100%;
	box-sizing: border-box;
	padding-bottom: 140px;
`

export const StyledResume = styled.nav`
	background: ${({ theme }) => theme.backgroundColor};
`

export const StyledSection = styled.section`
	padding: 16px;
	background-color: ${({ theme }) => theme.backgroundColor};
	color: ${({ theme }) => theme.fontColor};
`

export const StyledSkillsContainer = styled.div`
	border: 0.5px solid ${({ theme }) => theme.fontColor};
`

export const StyledSkillsRow = styled.div`
	display: flex;
`

export const StyledSkillsCell = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	border: 0.5px solid ${({ theme }) => theme.fontColor};
	font-size: var(--font-size-sm);
	padding: 8px 0;
`

export const StyledJobHeading = styled.h3`
	margin: 0;
`

export const StyledJobDetail = styled.li`
	margin: 20px 0;
`
