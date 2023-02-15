import { OptionHTMLAttributes, SelectHTMLAttributes } from 'react'

export interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {}

export interface IOption {
	value: string
	description?: string
	isSelected?: boolean
}
