import PropTypes from 'prop-types'

/** components */
import { Home } from '@components'

export default function Index({ name, title }) {
	return <Home name={name} title={title} />
}

Index.propTypes = {
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
