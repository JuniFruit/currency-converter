import React, { FC, PropsWithChildren } from 'react'
import { IOption } from './Select.interface'
import styles from './Select.module.scss'

export const Option: FC<PropsWithChildren<IOption>> = ({
	children,
	...rest
}) => {
	return (
		<option {...{ ...rest }} className={styles.option_wrapper}>
			{children}
		</option>
	)
}
