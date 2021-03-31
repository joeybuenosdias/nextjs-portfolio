import PropTypes from 'prop-types'
import Image from 'next/image'
import { StyledName, StyledTitle, Container } from './home.styled'

export default function Home({ name, title }) {
	return (
		<Container>
			<StyledName>{name}</StyledName>
			<StyledTitle>{title}</StyledTitle>
			<Image
				alt="Beach sunset with palm trees"
				src="/beach.svg"
				width={320}
				height={320}
			/>
		</Container>
	)
}

Home.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}
