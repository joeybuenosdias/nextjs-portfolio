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
	width: 50%;

	@media (max-width: 658px) {
		width: 75%;
	}

	@media (max-width: 414px) {
		width: 100%;
	}

	&:hover {
		background-color: ${({ theme }) => theme.hoverColor};
		cursor: pointer;
	}
`

export const ContactTitle = styled.h4`
	margin-left: 32px;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;  
	overflow: hidden;

	@media (max-width: 414px) {
		margin-left: 16px;
	}
`
