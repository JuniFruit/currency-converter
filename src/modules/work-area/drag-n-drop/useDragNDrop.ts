import { useCallback, useEffect, useRef, useState, TouchEvent } from 'react'

type IUseDragAndDropState = {
	id: number
}

export function useDragAndDrop<T extends IUseDragAndDropState>(data: T[]) {
	const [isDragging, setIsDragging] = useState(false)
	const [dataList, setDataList] = useState<T[]>([])
	const [dragItem, setDragItem] = useState<any>()
	const prevId = useRef<number>(0)

	const handleDragging = useCallback(
		(dragging: boolean, id: number) => {
			setIsDragging(dragging)
			if (!dragging) return
			const item = dataList.find(item => item.id === id)
			setDragItem(item)
		},
		[dataList]
	)
	const handleSwap = (idToSwap: number) => {
		// prevent infinite swapping while dragging over
		if (prevId.current !== idToSwap) _swapElements(idToSwap)
	}

	const _swapElements = (idToSwap: number) => {
		const dragInd = dataList.findIndex(item => item === dragItem)
		const indToSwap = dataList.findIndex(item => item?.id === idToSwap)
		const elToSwap = dataList[indToSwap]
		dataList[dragInd] = elToSwap
		dataList[indToSwap] = dragItem
		prevId.current = idToSwap
	}

	const handleTouchStart = (e: TouchEvent<HTMLDivElement>, id: number) => {
		// if (!draggable || !containerRef.current) return
		const event = new DragEvent('dragstart')
		e.target.addEventListener('dragstart', ev => {
			handleDragging(true, id)
			// setDragStart(true)
		})
		e.target.addEventListener('dragend', ev => {
			e.preventDefault()
			handleDragging(false, 0)
		})
		e.target.dispatchEvent(event)
	}

	const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
		const { targetTouches } = e
		// onDragOver(id)
	}
	const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
		const event = new DragEvent('dragend')
		e.target.dispatchEvent(event)
	}

	useEffect(() => {
		setDataList(data)
	}, [data])

	return {
		isDragging,
		handleDragging,
		handleSwap,
		handleTouchEnd,
		handleTouchStart,
		handleTouchMove
	}
}
