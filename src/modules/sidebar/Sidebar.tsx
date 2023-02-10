import { FC } from 'react'
import { dummyList } from './dummyData'
import PairList from './list/PairList'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	const data = dummyList

	return (
		<aside className={styles.wrapper}>
			<PairList currencyData={data} />
		</aside>
	)
}

export default Sidebar
