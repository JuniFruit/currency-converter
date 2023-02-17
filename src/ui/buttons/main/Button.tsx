import { Spinner } from '@/ui/loading/Spinner'
import { FC, PropsWithChildren } from 'react'
import { IButtonMain } from '../Button.interface'
import styles from '../Button.module.scss'

export const Button: FC<PropsWithChildren<IButtonMain>> = ({
	children,
	isLoading = false,
	...rest
}) => {
	return (
		<button
			{...rest}
			className={`${styles.main} ${isLoading ? styles.loading : ''}`}
			disabled={isLoading}
		>
			<div>{children}</div>
			<Spinner />
		</button>
	)
}
