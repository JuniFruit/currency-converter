import { FC } from 'react'
import styles from './Header.module.scss'
import RightNav from './rightNav/RightNav'

const Header: FC = () => {
	return (
		<header className={styles.wrapper}>
			<RightNav />
		</header>
	)
}

export default Header
