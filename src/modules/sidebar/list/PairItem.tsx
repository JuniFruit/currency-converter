import { FC } from 'react'
import { IPairItem } from './List.interface'
import styles from './List.module.scss'

export const PairItem: FC<IPairItem> = ({ value, pair }) => {
	return (
		<div className={styles.item_wrapper}>
			<h3>{pair}</h3>
			<span>{value}</span>
		</div>
	)
}
