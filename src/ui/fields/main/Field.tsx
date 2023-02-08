import { forwardRef } from 'react'
import { IField } from './Field.interface'
import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ type = 'text', style, ...rest }, ref) => {
		return (
			<div className={styles.input} style={style}>
				<input ref={ref} type={type} {...rest}></input>
			</div>
		)
	}
)

export default Field
