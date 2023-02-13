import { ICurrencySelect } from '@/components/currency-select/CurrencySelect.interface'

export interface IConvertBody {
	fromDefault: string
	toDefault: string
	selectOptions: ICurrencySelect
	onConvert: () => void
	onSelect: (val: string, select: 'from' | 'to') => void
}
