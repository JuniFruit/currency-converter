import { IconBtn } from '@/ui/buttons/icon/IconBtn'
import { FC } from 'react'
import { IoBackspaceOutline } from 'react-icons/io5'
import ConvertBody from './body/ConvertBody'
import { IConvertBox } from './ConvertBox.interface'
import styles from './ConvertBox.module.scss'
import ConvertHeader from './header/ConvertHeader'

const ConvertBox: FC<IConvertBox> = ({ title, onClose, id, ...rest }) => {
	return (
		<div className={styles.box_container}>
			<IconBtn onClick={() => onClose(id)}>
				<IoBackspaceOutline />
			</IconBtn>
			<ConvertHeader title={title} />
			<ConvertBody {...{ ...rest }} />
		</div>
	)
}

export default ConvertBox
