import { FC } from 'react'
import styles from './Spinner.module.scss'

export const Spinner: FC = () => {
	const points = new Array(11).fill(null)
	return (
		<div className={styles.container}>
			{points.map((point, ind) => (
				<div key={ind}></div>
			))}
		</div>
	)
}
