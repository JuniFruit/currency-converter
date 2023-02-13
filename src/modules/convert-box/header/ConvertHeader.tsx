import React, { FC } from 'react'
import { IConvertHeader } from './ConvertHeader.interface'
import styles from './ConvertHeader.module.scss'

const ConvertHeader: FC<IConvertHeader> = ({ from, to }) => {
	return (
		<div className={styles.header_container}>
			<h2>
				{from} to {to}
			</h2>
		</div>
	)
}

export default ConvertHeader
