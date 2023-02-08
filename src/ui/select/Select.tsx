import { FC, PropsWithChildren } from 'react'
import { ISelect } from './Select.interface'
import styles from './Select.module.scss'

export const Select: FC<PropsWithChildren<ISelect>> = ({
	children,
	...rest
}) => {
	return (
		<select {...{ ...rest }} className={styles.select_wrapper}>
			{children}
		</select>
	)
}
