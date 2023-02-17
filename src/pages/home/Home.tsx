import Layout from '@/modules/layout/Layout'
import Sidebar from '@/modules/sidebar/Sidebar'
import { IWorkArea } from '@/modules/work-area/WorkArea.interface'
import { FC, Suspense, lazy } from 'react'
import styles from './Home.module.scss'

const WorkArea = lazy(() => import('@/modules/work-area/WorkArea'))

export interface IHome extends IWorkArea {}

const Home: FC<IHome> = props => {
	return (
		<Layout title='Currency Converter'>
			<div className={styles.home_wrapper}>
				<Sidebar />
				<Suspense fallback={null}>
					<WorkArea {...{ ...props }} />
				</Suspense>
			</div>
		</Layout>
	)
}

export default Home
