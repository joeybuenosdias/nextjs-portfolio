import PropTypes from 'prop-types'
import Image from 'next/image'

export default function Home({ name, title }) {
	return (
		<div>
			<h1>{name}</h1>
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

export async function getServerSideProps() {
	const name = 'Joey Schrader'
	const title = 'Front End Engineer'

	return {
		props: {
			name,
			title,
		},
	}
}
