import {
	LiHTMLAttributes,
	OptionHTMLAttributes,
	SelectHTMLAttributes
} from 'react'

export interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {}

export interface IOption {
	value: string
	onSelect: (value: string) => void
	description?: string
	isSelected?: boolean
}
