import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'
import { IMeta } from './meta.interface'

const Meta: FC<PropsWithChildren<IMeta>> = ({
	title,
	description = 'conveniently convert any currency at any time',
	image,
	type = 'website',
	children
}) => {
	const { asPath } = useRouter()

	const currentUrl = `${process.env.NEXT_PUBLIC_APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp='headline'>{title}</title>
				{description ? (
					<>
						<meta
							itemProp='description'
							name='description'
							content={description}
						/>
						<link rel='canonical' href={currentUrl}></link>
						<meta property='og:url' content={currentUrl} />
						<meta property='og:type' content={type} />
						<meta property='og:title' content={title} />
						<meta property='og:description' content={description} />
						<meta property='og:image' content={image} />
						<meta
							name='viewport'
							content='width=device-width, initial-scale=1'
						/>
						<link rel='icon' href='/favicon.ico' />
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>
			{children}
		</>
	)
}

export default Meta
