import { IconBtn } from '@/ui/buttons/icon/IconBtn'
import { FC } from 'react'
import { IoBackspaceOutline, IoReorderThreeOutline } from 'react-icons/io5'
import ConvertBody from './body/ConvertBody'
import { IConvertBox } from './ConvertBox.interface'
import styles from './ConvertBox.module.scss'
import ConvertHeader from './header/ConvertHeader'
import { useConvertBox } from './useConvertBox'

const ConvertBox: FC<IConvertBox> = props => {
	const { handlers, status } = useConvertBox(props)

	return (
		<div
			className={`${styles.box_container} ${
				props.isDragging ? styles.dragging : ''
			} ${status.dragStart ? styles.dragStart : ''} draggable`}
			draggable={status.draggable}
			onDragStart={handlers.handleDragStart}
			onDragEnd={handlers.handleDragEnd}
			onDragOver={handlers.handleDragOver}
		>
			<IconBtn onClick={() => props.onClose(props.id)}>
				<IoBackspaceOutline />
			</IconBtn>
			<IconBtn onMouseDown={() => handlers.setDraggable(true)}>
				<IoReorderThreeOutline />
			</IconBtn>
			<ConvertHeader from={props.fromDefault} to={props.toDefault} />
			<ConvertBody
				{...{ ...props }}
				onSwap={handlers.handleSwap}
				onSelect={handlers.handleUpdateBox}
				onConvert={handlers.handleConvert}
				result={handlers.convertResult}
				isProcessing={status.isProcessing}
			/>
		</div>
	)
}

export default ConvertBox
