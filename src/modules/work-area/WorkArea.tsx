import { IconBtn } from '@/ui/buttons/icon/IconBtn'
import { Spinner } from '@/ui/loading/Spinner'
import { FC, lazy, Suspense } from 'react'
import { IoAddCircleSharp, IoTrashOutline } from 'react-icons/io5'
import { useWorkArea } from './useWorkArea'
import { IWorkArea } from './WorkArea.interface'
import styles from './WorkArea.module.scss'

const ConvertBox = lazy(() => import('../convert-box/ConvertBox'))

const WorkArea: FC<IWorkArea> = ({ currencyList }) => {
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
				<Suspense fallback={<Spinner />}>
					{convertBoxes.boxes.map(box => (
						<ConvertBox
							{...{ ...box }}
							onStartDragging={dragNdrop.handleDragging}
							isDragging={dragNdrop.isDragging}
							onDragOver={dragNdrop.handleSwap}
							selectOptions={{ data: currencyList || [] }}
							onClose={convertBoxes.deleteBox}
							onUpdate={convertBoxes.updateBox}
							key={box.id}
						/>
					))}
				</Suspense>
			</div>
		</section>
	)
}

export default WorkArea
