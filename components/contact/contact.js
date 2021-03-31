import Image from 'next/image'

const contactData = [
	{
		svgPath: '/github.svg',
		name: 'GitHub',
	},
	{
		svgPath: '/instagram.svg',
		name: 'Instagram',
	},
	{
		svgPath: '/linkedin.svg',
		name: 'LinkedIn',
	},
	{
		svgPath: '/spotify.svg',
		name: 'Spotify',
	},
	{
		svgPath: '/youtube.svg',
		name: 'YouTube',
	},
	{
		svgPath: '/twitter.svg',
		name: 'Twitter',
	},
]

export default function Contact() {
	return (
		<div>
			{contactData.map((contact) => (
				<div>
					<Image
						alt={contact.name}
						src={contact.svgPath}
						width={24}
						height={24}
					/>
				</div>
			))}
		</div>
	)
}
