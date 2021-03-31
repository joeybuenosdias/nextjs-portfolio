import PropTypes from 'prop-types'
import { StyledSection } from './resume.styled'

export default function Resume() {
	return (
		<div>
			<Section title="SUMMARY">
				<div>Summary Content here</div>
			</Section>
		</div>
	)
}

function Section({
	title,
	children,
}) {
	return (
		<StyledSection>
			<h2>{title}</h2>
			<div>{children}</div>
		</StyledSection>
	)
}

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}
