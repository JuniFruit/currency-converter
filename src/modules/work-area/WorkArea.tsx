import { IconBtn } from '@/ui/buttons/icon/IconBtn'
import { FC } from 'react'
import { IoAddCircleSharp } from 'react-icons/io5'
import ConvertBox from '../convert-box/ConvertBox'
import { useWorkArea } from './useWorkArea'
import styles from './WorkArea.module.scss'

const WorkArea: FC = () => {
	const { addBox, boxes, currencyList, handleOnCovert, deleteBox } =
		useWorkArea()

	return (
		<section className={styles.area_container}>
			<div className={styles.button_wrapper}>
				<IconBtn onClick={() => addBox()}>
					<IoAddCircleSharp />
				</IconBtn>
			</div>
			<div className={styles.boxes_wrapper}>
				{boxes.map(box => (
					<ConvertBox
						{...{ ...box }}
						selectOptions={{ data: currencyList }}
						onConvert={handleOnCovert}
						onClose={deleteBox}
					/>
				))}
			</div>
		</section>
	)
}

export default WorkArea
