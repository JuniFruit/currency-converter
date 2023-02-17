import { IBoxDataItem } from '@/types/box.interface'
import { IConvertBody } from './body/ConvertBody.interface'

export interface IConvertBox
	extends Omit<
		IConvertBody,
		'onSelect' | 'onConvert' | 'result' | 'onSwap' | 'isProcessing'
	> {
	id: number
	onClose: (id: number) => void
	isDragging: boolean
	onStartDragging: (dragging: boolean, id: number) => void
	onDragOver: (idToSwap: number) => void
	onUpdate: (box: IBoxDataItem) => void
}
