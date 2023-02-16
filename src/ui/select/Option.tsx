import { FC, KeyboardEventHandler } from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { IOption } from './Select.interface'
import styles from './Select.module.scss'

export const Option: FC<IOption> = ({
	value,
	description = '',
	isSelected = false,
	onSelect
}) => {
	const handleKeyDown: KeyboardEventHandler<HTMLLIElement> = e => {
		if (e.code === 'Enter') onSelect(value)
	}
	return (
		<li
			className={styles.option_wrapper}
			tabIndex={0}
			onClick={() => onSelect(value)}
			onKeyDown={handleKeyDown}
			aria-selected={isSelected}
			role='option'
		>
			<span
				className={`${styles.checkmark} ${
					isSelected ? styles.checkmark_selected : ''
				}`}
			>
				{<IoCheckmarkOutline />}
			</span>
			<div className={styles.value_wrapper}>
				<span>{value}</span>
				{description ? <p>{description}</p> : null}
			</div>
		</li>
	)
}
