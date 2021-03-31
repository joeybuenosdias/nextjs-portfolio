import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const StyledName = styled.h1`
	background: ${({ theme }) => theme.gradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

export const StyledTitle = styled.h3`
	background: ${({ theme }) => theme.gradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin: 0 0 48px 0;
`
