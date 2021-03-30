import PropTypes from 'prop-types'
import Image from 'next/image'
import { StyledName } from './home.styled'

export default function Home({ name, title }) {
	return (
		<div>
			<StyledName>{name}</StyledName>
			<h3>{title}</h3>
			<Image
				alt="Beach sunset with palm trees"
				src="/beach.svg"
				width={350}
				height={350}
			/>
		</div>
	)
}

Home.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}
