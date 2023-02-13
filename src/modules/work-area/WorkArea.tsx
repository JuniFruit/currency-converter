import { IconBtn } from '@/ui/buttons/icon/IconBtn'
import { FC } from 'react'
import { IoAddCircleSharp, IoTrashOutline } from 'react-icons/io5'
import ConvertBox from '../convert-box/ConvertBox'
import { useWorkArea } from './useWorkArea'
import styles from './WorkArea.module.scss'

const WorkArea: FC = () => {
	const { convertBoxes, dragNdrop } = useWorkArea()

	return (
		<section className={styles.area_container}>
			<div className={styles.button_wrapper}>
				<IconBtn onClick={convertBoxes.addBox}>
					<IoAddCircleSharp />
				</IconBtn>
				<IconBtn onClick={convertBoxes.deleteAll}>
					<IoTrashOutline />
				</IconBtn>
			</div>
			<div
				className={styles.boxes_wrapper}
				onDragOver={e => e.preventDefault()}
				onDrop={e => {
					e.preventDefault()
					dragNdrop.handleDragging(false, 0)
				}}
			>
				{convertBoxes.boxes.map(box => (
					<ConvertBox
						{...{ ...box }}
						onStartDragging={dragNdrop.handleDragging}
						isDragging={dragNdrop.isDragging}
						onDragOver={dragNdrop.handleSwap}
						selectOptions={{ data: convertBoxes.currencyList }}
						onConvert={convertBoxes.handleOnCovert}
						onClose={convertBoxes.deleteBox}
						onUpdate={convertBoxes.updateBox}
						key={box.id}
					/>
				))}
			</div>
		</section>
	)
}

export default WorkArea
