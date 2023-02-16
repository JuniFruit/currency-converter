import { FC, PropsWithChildren } from 'react'
import styles from './Select.module.scss'

export const OptionList: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ul
			className={styles.options_box}
			role='listbox'
			aria-orientation='vertical'
		>
			{children}
		</ul>
	)
}
