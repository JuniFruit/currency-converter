import Meta from '@/components/meta/Meta'
import { IMeta } from '@/components/meta/meta.interface'
import { FC, PropsWithChildren } from 'react'
import styles from './Layout.module.scss'

interface ILayout extends IMeta {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...{ ...rest }} />
			<div className={styles.page_wrapper}>
				<main>{children}</main>
			</div>
		</>
	)
}

export default Layout
