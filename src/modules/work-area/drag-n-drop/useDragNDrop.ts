import { useCallback, useRef, useState } from 'react'

type IUseDragAndDropState = {
	id: number
}

export function useDragAndDrop<T extends IUseDragAndDropState>(
	data: T[],
	onDataChange: (data: T[]) => void
) {
	const [isDragging, setIsDragging] = useState(false)

	const [dragItem, setDragItem] = useState<any>()
	const prevId = useRef<number>(0)

	const handleDragging = useCallback(
		(dragging: boolean, id: number) => {
			setIsDragging(dragging)
			if (!dragging) return
			const item = data.find(item => item.id === id)
			setDragItem(item)
		},
		[data]
	)
	const handleSwap = (idToSwap: number) => {
		// prevent infinite swapping while dragging over
		if (prevId.current !== idToSwap) _swapElements(idToSwap)
	}

	const _swapElements = (idToSwap: number) => {
		const copy = [...data]
		const dragInd = data.findIndex(item => item === dragItem)
		const indToSwap = data.findIndex(item => item?.id === idToSwap)
		const elToSwap = data[indToSwap]
		copy[dragInd] = elToSwap
		copy[indToSwap] = dragItem
		onDataChange(copy)
		prevId.current = idToSwap
	}

	// const handleTouchStart = (e: TouchEvent<HTMLDivElement>, id: number) => {
	// 	// if (!draggable || !containerRef.current) return
	// 	const event = new DragEvent('dragstart')
	// 	e.target.addEventListener('dragstart', ev => {
	// 		handleDragging(true, id)
	// 		// setDragStart(true)
	// 	})
	// 	e.target.addEventListener('dragend', ev => {
	// 		e.preventDefault()
	// 		handleDragging(false, 0)
	// 	})
	// 	e.target.dispatchEvent(event)
	// }

	// const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
	// 	const { targetTouches } = e
	// 	// onDragOver(id)
	// }
	// const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
	// 	const event = new DragEvent('dragend')
	// 	e.target.dispatchEvent(event)
	// }

	return {
		isDragging,
		handleDragging,
		handleSwap
	}
}
