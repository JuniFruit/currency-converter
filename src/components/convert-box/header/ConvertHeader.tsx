import React, { FC } from 'react'
import { IConvertHeader } from './ConvertHeader.interface'
import styles from './ConvertHeader.module.scss'

const ConvertHeader: FC<IConvertHeader> = ({ title }) => {
	return (
		<div className={styles.header_container}>
			<h2>{title}</h2>
		</div>
	)
}

export default ConvertHeader
