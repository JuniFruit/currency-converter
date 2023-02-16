import { IConvertResult } from '@/types/currencyList.interface'
import { DragEventHandler, useState } from 'react'
import { convertApi } from './api/convert.api'
import { IConvertBox } from './ConvertBox.interface'

interface IUseConvertBox extends IConvertBox {}

export const useConvertBox = ({
	onDragOver,
	id,
	onUpdate,
	onStartDragging,
	...rest
}: IUseConvertBox) => {
	const [dragStart, setDragStart] = useState(false)
	const [draggable, setDraggable] = useState(false)
	const [convertResult, setConvertResult] = useState<IConvertResult | null>(
		null
	)
	const handleUpdateBox = (val: string, select: 'from' | 'to') => {
		onUpdate({
			fromDefault: select === 'from' ? val : rest.fromDefault,
			toDefault: select === 'to' ? val : rest.toDefault,
			id: id
		})
	}

	const [convert] = convertApi.useConvertMutation()
	const handleConvert = (amount: string) => {
		convert({
			amount: +amount,
			from: rest.fromDefault,
			to: rest.toDefault
		})
			.unwrap()
			.then(res => setConvertResult(res))
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

	return {
		handleDragEnd,
		handleDragOver,
		handleDragStart,
		handleUpdateBox,
		handleConvert,
		dragStart,
		draggable,
		convertResult,
		setDraggable
	}
}
