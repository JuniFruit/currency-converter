import { ICurrencySelect } from '@/components/currency-select/CurrencySelect.interface'
import { IConvertResult } from '@/types/currencyList.interface'

export interface IConvertBody {
	fromDefault: string
	toDefault: string
	selectOptions: Omit<ICurrencySelect, 'onSelect'>
	onConvert: (amount: string) => void
	onSelect: (val: string, select: 'from' | 'to') => void
	result: IConvertResult | null
}
