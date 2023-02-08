import ConvertModule from '@/modules/convert-box/ConvertModule'
import Layout from '@/modules/layout/Layout'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<Layout title='Home'>
			<ConvertModule />
		</Layout>
	)
}

export default Home
