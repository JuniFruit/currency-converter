import { ICurrencyItem } from '@/components/currency-select/CurrencySelect.interface'
import { useCallback, useEffect, useState } from 'react'
import { currencyApi } from './api/currency.api'
import { useDragAndDrop } from './drag-n-drop/useDragNDrop'
import { IDataItem } from './dummyData'

export const useWorkArea = () => {
	const [boxes, setBoxes] = useState<IDataItem[]>([])
	const currencyList: ICurrencyItem[] = [
		{ currency: 'USD' },
		{ currency: 'RUR' },
		{ currency: 'YEN' }
	]
	// const { data: currencyList } = currencyApi.useGetCurrencyPairsQuery(null)
	const defaultData: any = {
		fromDefault: 'RUR',
		toDefault: 'USD',
		id: Math.random() * 100
	}

	const handleDataChange = useCallback((newData: IDataItem[]) => {
		setBoxes(newData)
	}, [])

	const dragHandlers = useDragAndDrop<IDataItem>(boxes, handleDataChange)

	const handleOnCovert = useCallback(() => {}, [])

	const addBox = useCallback(() => {
		setBoxes(prev => [defaultData, ...prev])
	}, [boxes.length])

	const getPrevBoxes = () => {
		const userBoxes = window.localStorage.getItem('userBoxes')
		if (userBoxes) setBoxes(prev => [...JSON.parse(userBoxes)])
	}

	const deleteBox = useCallback(
		(id: number) => {
			setBoxes(prev => prev.filter(item => item.id !== id))
		},
		[boxes.length]
	)

	const updateBox = useCallback(
		(item: IDataItem) => {
			const ind = boxes.findIndex(box => box.id === item.id)
			setBoxes(prev => {
				let copy = prev.slice()
				copy[ind] = {
					...copy[ind],
					...item
				}
				return copy
			})
		},
		[boxes]
	)

	const deleteAll = useCallback(() => {
		setBoxes([])
	}, [])

	useEffect(() => {
		getPrevBoxes()
	}, [])

	useEffect(() => {
		const timeout = setTimeout(() => {
			window.localStorage.setItem('userBoxes', JSON.stringify(boxes))
		}, 1000)
		return () => {
			clearTimeout(timeout)
		}
	}, [boxes])

	useEffect(() => {}, [boxes])
	return {
		convertBoxes: {
			addBox,
			boxes,
			currencyList,
			handleOnCovert,
			deleteBox,
			deleteAll,
			updateBox
		},
		dragNdrop: { ...dragHandlers }
	}
}
