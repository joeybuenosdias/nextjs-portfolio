import styled from 'styled-components'

export const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.backgroundColor}
`

export const StyledHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 32px;
`
