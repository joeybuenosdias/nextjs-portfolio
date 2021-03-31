import PropTypes from 'prop-types'
import {
	StyledResumeContainer,
	StyledResume,
	StyledSection,
	StyledSkillsContainer,
	StyledSkillsRow,
	StyledSkillsCell,
	StyledJobHeading,
	StyledJobDetail,
} from './resume.styled'

export default function Resume() {
	return (
		<StyledResumeContainer>
			<StyledResume>
				<Summary />
				<Skills />
				<Experience />
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
			<StyledSkillsContainer>
				{skillsData.map((row) => (
					<StyledSkillsRow>
						{row.map((cell) => (
							<StyledSkillsCell>{cell.name}</StyledSkillsCell>
						))}
					</StyledSkillsRow>
				))}
			</StyledSkillsContainer>
		</Section>
	)
}

const experienceData = [
	{
		employer: 'Amazon',
		jobTitle: 'Front End Engineer',
		startDate: 'April 2021',
		endDate: 'Present',
		details: [
			'Coming soon...',
		],
	},
	{
		employer: 'Overstock',
		jobTitle: 'Front End Developer',
		startDate: 'June 2018',
		endDate: 'March 2021',
		details: [
			'Contributor in Overstock’s product page front end migration to Next.js and React Context API.',
			'Optimize and maintain product page to utilize current React/Redux best practices.',
			'Ensure unit test coverage is 100% for all features using React Testing Library, Jest or Enzyme.',
			'Work closely with UX Design & Product Management personnel.',
			'Ensure SEO-Friendly and ADA Compliant UI features using Axe and Lighthouse.',
			'Hold regular kickoff meetings with developers to discuss architecture for new projects.',
			'Create detailed documentation for backend services utilized by product page.',
		],
	},
]

function Experience() {
	return (
		<Section title="EXPERIENCE">
			{experienceData.map((job) => (
				<Job key={job.employer} {...job} />
			))}
		</Section>
	)
}

function Job({
	employer,
	jobTitle,
	startDate,
	endDate,
	details,
}) {
	return (
		<div>
			<div>
				<StyledJobHeading>{employer}</StyledJobHeading>
				<StyledJobHeading>{jobTitle}</StyledJobHeading>
				<div>
					<span>
						{startDate}
						&nbsp;
					</span>
					-
					<span>
						&nbsp;
						{endDate}
					</span>
				</div>
			</div>
			<ul>
				{details.map((detail) => (
					<StyledJobDetail>{detail}</StyledJobDetail>
				))}
			</ul>
		</div>
	)
}

Job.propTypes = {
	employer: PropTypes.string.isRequired,
	jobTitle: PropTypes.string.isRequired,
	startDate: PropTypes.string.isRequired,
	endDate: PropTypes.string.isRequired,
	details: PropTypes.array.isRequired,
}
