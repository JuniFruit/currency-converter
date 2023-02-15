import { ICurrencyItem } from '@/components/currency-select/CurrencySelect.interface'
import { ISymbolResponse } from '@/types/currencyList.interface'

export const transformResponseToList = (
	res: ISymbolResponse
): ICurrencyItem[] => {
	const result = []
	console.log(res)
	for (let currency in res.symbols) {
		result.push({
			currency: currency
		})
	}

	return result
}
