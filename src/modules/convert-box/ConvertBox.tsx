import { IconBtn } from '@/ui/buttons/icon/IconBtn'
import { DragEventHandler, FC, useState } from 'react'
import { IoBackspaceOutline, IoReorderThreeOutline } from 'react-icons/io5'
import ConvertBody from './body/ConvertBody'
import { IConvertBox } from './ConvertBox.interface'
import styles from './ConvertBox.module.scss'
import ConvertHeader from './header/ConvertHeader'

const ConvertBox: FC<IConvertBox> = ({
	onClose,
	isDragging,
	onStartDragging,
	onDragOver,
	onUpdate,
	id,
	...rest
}) => {
	const [dragStart, setDragStart] = useState(false)
	const [draggable, setDraggable] = useState(false)

	const handleUpdateBox = (val: string, select: 'from' | 'to') => {
		onUpdate({
			fromDefault: select === 'from' ? val : rest.fromDefault,
			toDefault: select === 'to' ? val : rest.toDefault,
			id: id
		})
	}

	const handleDragStart: DragEventHandler<HTMLDivElement> = e => {
		onStartDragging(true, id)
		e.dataTransfer.effectAllowed = 'move'
		setDragStart(true)
	}

	const handleDragEnd: DragEventHandler<HTMLDivElement> = e => {
		e.preventDefault()
		onStartDragging(false, 0)
		setDraggable(false)
		setDragStart(false)
	}

	const handleDragOver: DragEventHandler<HTMLDivElement> = e => {
		e.preventDefault()
		onDragOver(id)
	}

	return (
		<div
			className={`${styles.box_container} ${
				isDragging ? styles.dragging : ''
			} ${dragStart ? styles.dragStart : ''} draggable`}
			draggable={draggable}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			onDragOver={handleDragOver}
		>
			<IconBtn onClick={() => onClose(id)}>
				<IoBackspaceOutline />
			</IconBtn>
			<IconBtn
				onTouchStart={() => setDraggable(true)}
				onMouseDown={() => setDraggable(true)}
			>
				<IoReorderThreeOutline />
			</IconBtn>
			<ConvertHeader from={rest.fromDefault} to={rest.toDefault} />
			<ConvertBody {...{ ...rest }} onSelect={handleUpdateBox} />
		</div>
	)
}

export default ConvertBox
