import { ICurrencyItem } from '@/components/currency-select/CurrencySelect.interface'
import { ISymbolResponse } from '@/types/currencyList.interface'

export const transformResponseToList = (
	res: ISymbolResponse
): ICurrencyItem[] => {
	const result = []
	for (let currency in res.symbols) {
		result.push({
			currency: currency,
			description: (res.symbols as any)[currency]
		})
	}

	return result
}
