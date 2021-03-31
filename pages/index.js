import PropTypes from 'prop-types'

/** components */
import { Home } from '@components'

export default function HomePage({ name, title }) {
	return <Home name={name} title={title} />
}

HomePage.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

export async function getServerSideProps() {
	const name = 'JOEY SCHRADER'
	const title = 'FRONT END ENGINEER'

	return {
		props: {
			name,
			title,
		},
	}
}
