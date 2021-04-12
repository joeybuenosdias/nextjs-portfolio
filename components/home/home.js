import Image from 'next/image'
import { StyledName, StyledTitle, Container } from './home.styled'

export default function Home() {
	return (
		<Container>
			<StyledName>JOEY SCHRADER</StyledName>
			<StyledTitle>FRONT END ENGINEER</StyledTitle>
			<Image
				alt="Beach sunset with palm trees"
				src="/beach.svg"
				width={320}
				height={320}
			/>
		</Container>
	)
}
