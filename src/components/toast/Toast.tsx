import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { IconBtn } from '@/ui/buttons/icon/IconBtn'
import { FC } from 'react'
import {
	IoAlertOutline,
	IoCheckmarkCircleOutline,
	IoClose,
	IoWarningOutline
} from 'react-icons/io5'
import styles from './Toast.module.scss'

const Toast: FC = () => {
	const { message, type } = useTypedSelector(state => state.message)
	const { clearMsg } = useActions()

	if (!message) return null

	return (
		<div className={`${styles.message_body} ${styles[type]}`}>
			<div className={styles.message_wrapper}>
				<div className={styles.icon}>
					{type === 'success' && <IoCheckmarkCircleOutline />}
					{type === 'warining' && <IoWarningOutline />}
					{type === 'error' && <IoAlertOutline />}
				</div>
				<div className={styles.message}>
					<p>{message}</p>
				</div>
				<IconBtn
					onClick={e => {
						e.preventDefault()
						clearMsg()
					}}
					aria-label={'close'}
				>
					<IoClose />
				</IconBtn>
			</div>
		</div>
	)
}

export default Toast
