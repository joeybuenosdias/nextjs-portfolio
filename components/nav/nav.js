import Link from 'next/link'

const navData = [
	{
		href: '/',
		name: 'Home',
	},
	{
		href: '/resume',
		name: 'Resume',
	},
	{
		href: '/contact',
		name: 'Contact',
	},
]

export default function Nav() {
	return (
		<nav>
			{navData.map((navLink) => (
				<Link key={navLink.name} href={navLink.href}>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a>{navLink.name}</a>
				</Link>
			))}
		</nav>
	)
}
