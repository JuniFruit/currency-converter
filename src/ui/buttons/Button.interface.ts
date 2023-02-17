import { ButtonHTMLAttributes } from 'react'
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IButtonMain extends IButton {
	isLoading?: boolean
}
