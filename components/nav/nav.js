import Link from 'next/link'
import Image from 'next/image'
import {
	StyledLink,
	StyledNav,
	StyledNavContainer,
	StyledText,
} from './nav.styled'

const navData = [
	{
		href: '/',
		name: 'HOME',
		svgPath: '/home.svg',
	},
	{
		href: '/resume',
		name: 'RESUME',
		svgPath: '/file.svg',
	},
	{
		href: '/contact',
		name: 'CONTACT',
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
								height={36}
								width={36}
								src={navLink.svgPath}
							/>
							<StyledText>{navLink.name}</StyledText>
						</StyledLink>
					</Link>
				))}
			</StyledNav>
		</StyledNavContainer>
	)
}
