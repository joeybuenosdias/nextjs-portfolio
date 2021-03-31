import PropTypes from 'prop-types'
import {
	StyledResumeContainer,
	StyledResume,
	StyledSection,
} from './resume.styled'

export default function Resume() {
	return (
		<StyledResumeContainer>
			<StyledResume>
				<Section title="SUMMARY">
					<Summary />
				</Section>
			</StyledResume>
		</StyledResumeContainer>
	)
}

function Section({
	title,
	children,
}) {
	return (
		<StyledSection>
			<h2>{title}</h2>
			{children}
		</StyledSection>
	)
}

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

function Summary() {
	return (
		<div>
			{/* eslint-disable-next-line max-len */}
			Front End Engineer with 3 years of experience writing reusable React components and contributing to JavaScript web applications.
		</div>
	)
}
