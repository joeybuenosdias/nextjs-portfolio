import PropTypes from 'prop-types'

export default function Home({ name, title }) {
	console.log('name', name)
	console.log('title', title)
	return (
		<div>
			Home Page Content
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
