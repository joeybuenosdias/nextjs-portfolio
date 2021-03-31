import PropTypes from 'prop-types'
import {
	StyledResumeContainer,
	StyledResume,
	StyledSection,
	StyledSkillContainer,
	StyledSkillRow,
	StyledSkillCell,
} from './resume.styled'

export default function Resume() {
	return (
		<StyledResumeContainer>
			<StyledResume>
				<Summary />
				<Skills />
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
		<Section title="SUMMARY">
			<div>
				{/* eslint-disable-next-line max-len */}
				Front End Engineer with 3 years of experience writing reusable React components and contributing to JavaScript web applications.
			</div>
		</Section>
	)
}

const skillsData = [
	[
		{
			name: 'JavaScript',
		},
		{
			name: 'React',
		},
		{
			name: 'Next.js',
		},
	],
	[
		{
			name: 'Redux',
		},
		{
			name: 'HTML',
		},
		{
			name: 'CSS',
		},
	],
	[
		{
			name: 'MongoDB',
		},
		{
			name: 'Express',
		},
		{
			name: 'Node.js',
		},
	],
	[
		{
			name: 'RTL',
		},
		{
			name: 'Jest',
		},
		{
			name: 'Ecommerce',
		},
	],
]

function Skills() {
	return (
		<Section title="SKILLS">
			<StyledSkillContainer>
				{skillsData.map((row) => (
					<StyledSkillRow>
						{row.map((cell) => (
							<StyledSkillCell>{cell.name}</StyledSkillCell>
						))}
					</StyledSkillRow>
				))}
			</StyledSkillContainer>
		</Section>
	)
}
