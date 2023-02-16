import { ISelect } from '@/ui/select/Select.interface'

export interface ICurrencySelect {
	data: ICurrencyItem[]
	onSelect: (value: string) => void
	defaultValue?: string
}

export interface ICurrencyItem {
	currency: string
	description?: string
}
