import { FC, PropsWithChildren } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import { IOption } from './Select.interface'
import styles from './Select.module.scss'

export const Option: FC<IOption> = ({
	value,
	description = '',
	isSelected = false
}) => {
	return (
		<li className={styles.option_wrapper}>
			<span>{<IoAddCircleOutline />}</span>
			<span>{value}</span>
			{description ? <p>{description}</p> : null}
		</li>
	)
}
