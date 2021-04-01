import Image from 'next/image'
import Link from 'next/link'
import {
	ContactContainer,
	ContactItem,
	ContactTitle,
} from './contact.styled'

const contactData = [
	{
		svgPath: '/github.svg',
		name: 'GitHub',
		link: 'https://github.com/mojocodeio',
		username: 'mojocodeio',
	},
	{
		svgPath: '/instagram.svg',
		name: 'Instagram',
		link: 'https://www.instagram.com/joey_mojocode/',
		username: 'joey_mojocode',
	},
	{
		svgPath: '/linkedin.svg',
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/joey-schrader-472388aa/',
		username: 'Joey Schrader',
	},
	{
		svgPath: '/spotify.svg',
		name: 'Spotify',
		link: 'https://open.spotify.com/user/0cvapgyzp685sn5lpahrwvzle',
		username: 'Jbone',
	},
	{
		svgPath: '/youtube.svg',
		name: 'YouTube',
		link: 'https://www.youtube.com/channel/UCxpwWHDzM51U50L5g0uEtxw/playlists',
		username: 'MOJO CODE',
	},
	{
		svgPath: '/twitter.svg',
		name: 'Twitter',
		link: 'https://twitter.com/joey_mojocode',
		username: '@joey_mojocode',
	},
]

export default function Contact() {
	return (
		<ContactContainer>
			{contactData.map((contact) => (
				<Link key={contact.name} href={contact.link}>
					<ContactItem>
						<Image
							alt={contact.name}
							src={contact.svgPath}
							width={24}
							height={24}
						/>
						<ContactTitle>
							{contact.name}
							{' '}
							-
							{' '}
							{contact.username}
						</ContactTitle>
					</ContactItem>
				</Link>
			))}
		</ContactContainer>
	)
}
