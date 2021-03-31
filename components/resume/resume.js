import PropTypes from 'prop-types'
import {
	StyledResumeContainer,
	StyledResume,
	StyledSection,
	StyledSkillsContainer,
	StyledSkillsRow,
	StyledSkillsCell,
	StyledHeading,
	StyledJobContainer,
	StyledJobDetail,
	StyledEducationItem,
} from './resume.styled'

export default function Resume() {
	return (
		<StyledResumeContainer>
			<StyledResume>
				<Summary />
				<Skills />
				<Experience />
				<Education />
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
	{
		employer: 'DevPoint Labs',
		jobTitle: 'Front End Developer',
		startDate: 'September 2017',
		endDate: 'June 2018',
		details: [
			'Create new UI features for DevPoint Studio’s clients utilizing React/Redux.',
			'Mentor incoming Developers participating in the DevPoint Labs Coding Bootcamp.',
			'OddJobb, owned the ‘Services’ page using React & Redux.',
			'EventTech, an Eventbrite clone built with Nodejs, Express, React & Redux.',
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
	const dateDisplay = `${startDate} - ${endDate}`
	return (
		<StyledJobContainer>
			<HeadInfo
				primaryInfo={employer}
				secondaryInfo={jobTitle}
				tertiaryInfo={dateDisplay}
			/>
			<ul>
				{details.map((detail) => (
					<StyledJobDetail>{detail}</StyledJobDetail>
				))}
			</ul>
		</StyledJobContainer>
	)
}

Job.propTypes = {
	employer: PropTypes.string.isRequired,
	jobTitle: PropTypes.string.isRequired,
	startDate: PropTypes.string.isRequired,
	endDate: PropTypes.string.isRequired,
	details: PropTypes.array.isRequired,
}

function HeadInfo({
	primaryInfo,
	secondaryInfo,
	tertiaryInfo,
}) {
	return (
		<div>
			<StyledHeading>{primaryInfo}</StyledHeading>
			<StyledHeading>{secondaryInfo}</StyledHeading>
			<div>{tertiaryInfo}</div>
		</div>
	)
}

HeadInfo.propTypes = {
	primaryInfo: PropTypes.string.isRequired,
	secondaryInfo: PropTypes.string.isRequired,
	tertiaryInfo: PropTypes.string.isRequired,
}

const educationData = [
	{
		schoolName: 'DevPoint Labs',
		achievement: 'Web Development Certification',
		graduationDate: 'August 2017',
	},
	{
		schoolName: 'Utah State University',
		achievement: 'Bachelor of Science - Marketing',
		graduationDate: 'May 2010',
	},
	{
		schoolName: 'Snow College',
		achievement: 'General Coursework',
		graduationDate: 'December 2008',
	},
]

function Education() {
	return (
		<Section title="EDUCATION">
			<div>
				{educationData.map((item) => (
					<StyledEducationItem>
						<StyledHeading>{item.schoolName}</StyledHeading>
						<StyledHeading>{item.achievement}</StyledHeading>
						<div>{item.graduationDate}</div>
					</StyledEducationItem>
				))}
			</div>
		</Section>
	)
}
