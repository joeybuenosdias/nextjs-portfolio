import Link from 'next/link'
import { StyledLink, StyledNav, StyledNavContainer } from './nav.styled'

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
		<StyledNavContainer>
			<StyledNav>
				{navData.map((navLink) => (
					<Link key={navLink.name} href={navLink.href}>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<StyledLink>{navLink.name}</StyledLink>
					</Link>
				))}
			</StyledNav>
		</StyledNavContainer>
	)
}
