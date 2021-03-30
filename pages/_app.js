import PropTypes from 'prop-types'
import { Nav } from '@components'
import { darkMode, lightMode } from '@themes'

export default function App({ Component, pageProps }) {
	console.log('darkMode', darkMode)
	console.log('lightMode', lightMode)
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
