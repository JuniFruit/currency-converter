import { IDataItem } from '../work-area/dummyData'
import { IConvertBody } from './body/ConvertBody.interface'
// type IBox = IConvertBody & HTMLDivElement

export interface IConvertBox extends Omit<IConvertBody, 'onSelect'> {
	id: number
	onClose: (id: number) => void
	isDragging: boolean
	onStartDragging: (dragging: boolean, id: number) => void
	onDragOver: (idToSwap: number) => void
	onUpdate: (box: IDataItem) => void
}
