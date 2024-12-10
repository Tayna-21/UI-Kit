import { DropdownListEnum } from "../constants"

export interface ButtonPropsTypes {
	variant: 'primary' | 'secondary',
	isIcon: boolean,
	state?: 'hover' | 'active',
	value: string,
	disabled: boolean,
	onClick: () => void
}

export interface LinkPropsTypes {
	disabled: boolean,
	state?: 'hover' | 'active'
}

export interface CheckboxPropsTypes {
	value: string,
	isLabel: boolean,
	isChecked: boolean
}

export interface InputPropsTypes {
	type: string,
	label: string,
	placeholder: string,
	id: string,
	value?: string,
	disabled: boolean,
	isInvalid: boolean,
	state?: 'filled' | 'active'
}

export interface ModalPropsTypes {
	title: string,
	text: string
}

export interface SelectPropsTypes {
	label: string,
	placeholder: string,
}

export interface OptionType { 
	value: string, 
	label: string
};

export interface TextareaPropsTypes {
	label: string
}

export interface ToastPropsTypes {
	text: string,
	time: number
}
