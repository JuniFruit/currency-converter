import { IconBtn } from '@/ui/buttons/icon/IconBtn'
import { FC } from 'react'
import { IoBackspaceOutline, IoReorderThreeOutline } from 'react-icons/io5'
import ConvertBody from './body/ConvertBody'
import { IConvertBox } from './ConvertBox.interface'
import styles from './ConvertBox.module.scss'
import ConvertHeader from './header/ConvertHeader'
import { useConvertBox } from './useConvertBox'

const ConvertBox: FC<IConvertBox> = props => {
	const {
		handleDragEnd,
		handleDragOver,
		handleDragStart,
		handleUpdateBox,
		setDraggable,
		handleConvert,
		dragStart,
		draggable,
		convertResult
	} = useConvertBox(props)

	return (
		<div
			className={`${styles.box_container} ${
				props.isDragging ? styles.dragging : ''
			} ${dragStart ? styles.dragStart : ''} draggable`}
			draggable={draggable}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			onDragOver={handleDragOver}
		>
			<IconBtn onClick={() => props.onClose(props.id)}>
				<IoBackspaceOutline />
			</IconBtn>
			<IconBtn onMouseDown={() => setDraggable(true)}>
				<IoReorderThreeOutline />
			</IconBtn>
			<ConvertHeader from={props.fromDefault} to={props.toDefault} />
			<ConvertBody
				{...{ ...props }}
				onSelect={handleUpdateBox}
				onConvert={handleConvert}
				result={convertResult}
			/>
		</div>
	)
}

export default ConvertBox
