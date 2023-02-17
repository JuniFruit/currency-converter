import Header from '@/components/header/Header'
import Meta from '@/components/meta/Meta'
import { IMeta } from '@/components/meta/meta.interface'
import Toast from '@/components/toast/Toast'
import { FC, PropsWithChildren } from 'react'
import styles from './Layout.module.scss'

interface ILayout extends IMeta {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...{ ...rest }} />
			<Header />
			<div className={styles.page_wrapper}>
				<main>{children}</main>
				<Toast />
			</div>
		</>
	)
}

export default Layout
