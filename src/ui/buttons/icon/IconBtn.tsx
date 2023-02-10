import { FC, PropsWithChildren } from 'react'
import { IButton } from '../Button.interface'
import styles from '../Button.module.scss'

export const IconBtn: FC<PropsWithChildren<IButton>> = ({
	children,
	...rest
}) => {
	return (
		<button {...rest} className={styles.icon}>
			{children}
		</button>
	)
}
