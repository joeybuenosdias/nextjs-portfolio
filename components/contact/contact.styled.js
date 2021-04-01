import styled from 'styled-components'

export const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.fontColor};
	padding: 32px;
`

export const ContactItem = styled.div`
	display: flex;
	align-items: center;
	padding: 0 1em;

	&:hover {
		background-color: ${({ theme }) => theme.hoverColor};
		cursor: pointer;
	}
`

export const ContactTitle = styled.h4`
	margin-left: 32px;
`
