import PropTypes from 'prop-types'
import { Nav } from '@components'

export default function App({ Component, pageProps }) {
	return (
		<div>
			<Component {...pageProps} />
			<Nav />
		</div>
	)
}

App.propTypes = {
	Component: PropTypes.object.isRequired,
	pageProps: PropTypes.string.isRequired,
}
