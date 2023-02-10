import { ICurrencyItem } from "@/components/currency-select/CurrencySelect.interface"
import { useEffect, useState } from "react"
import { dummyData, IDataItem } from "./dummyData"

export const useWorkArea = () => {
    const [boxes, setBoxes] = useState<IDataItem[]>([])
    const currencyList: ICurrencyItem[] = [{currency: 'USD'}]
	const defaultData: IDataItem = {
        title: 'New Box',
        fromDefault: 'RUR',
        toDefault: 'USD',
        id: Math.random() * 100
    }
    
    const handleOnCovert = () => {}

	const addBox = () => {
		setBoxes(prev => [defaultData, ...prev])
	}

	const getPrevBoxes = () => {
		setBoxes(prev => [...dummyData])
	}

    const deleteBox = (id: number) => {
        setBoxes(prev => prev.filter(item => item.id !== id));
    }

	useEffect(() => {
		getPrevBoxes()
	}, [])

    return {
        addBox,
        boxes,
        currencyList,
        handleOnCovert,
        deleteBox
    }
}