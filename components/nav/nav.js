import Link from 'next/link'
import Image from 'next/image'
import { StyledLink, StyledNav, StyledNavContainer } from './nav.styled'

const navData = [
	{
		href: '/',
		name: 'Home',
		svgPath: '/home.svg',
	},
	{
		href: '/resume',
		name: 'Resume',
		svgPath: '/file.svg',
	},
	{
		href: '/contact',
		name: 'Contact',
		svgPath: '/contact.svg',
	},
]

export default function Nav() {
	return (
		<StyledNavContainer>
			<StyledNav>
				{navData.map((navLink) => (
					<Link key={navLink.name} href={navLink.href}>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<StyledLink>
							<Image
								alt={`${navLink.name}`}
								height={24}
								width={24}
								src={navLink.svgPath}
							/>
							<div>{navLink.name}</div>
						</StyledLink>
					</Link>
				))}
			</StyledNav>
		</StyledNavContainer>
	)
}
