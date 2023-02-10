import Layout from '@/modules/layout/Layout'
import Sidebar from '@/modules/sidebar/Sidebar'
import WorkArea from '@/modules/work-area/WorkArea'
import { FC } from 'react'
import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<Layout title='Home'>
			<div className={styles.home_wrapper}>
				<Sidebar />
				<WorkArea />
			</div>
		</Layout>
	)
}

export default Home
