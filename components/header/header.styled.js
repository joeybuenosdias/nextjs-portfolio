import styled from 'styled-components'

export const StyledHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 32px;
`

export const StyledLabel = styled.label`
	color: ${({ theme }) => theme.fontColor};
	font-size: var(--font-size-xs);
	display: flex;
`

export const StyledModeWrapper = styled.div`
	margin-right: 4px;
`
