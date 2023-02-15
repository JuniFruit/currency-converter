import { FC, PropsWithChildren } from 'react'
import { IButton } from '../buttons/Button.interface'
import styles from './Select.module.scss'

export const Select: FC<PropsWithChildren<IButton>> = ({
	children,
	...rest
}) => {
	return (
		<button {...{ ...rest }} className={styles.select_wrapper}>
			{children}
		</button>
	)
}
