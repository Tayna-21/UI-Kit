export interface ButtonPropsTypes {
	primary: boolean,
	icon: boolean,
	state: 'default' | 'disabled' | 'hover' | 'active',
	onClick: () => void
}

export interface LinkPropsTypes {
	state: 'default' | 'disabled' | 'hover' | 'active'
}

export interface CheckboxPropsTypes {
	checked: boolean,
	label?: string,
	id: string
}

export interface InputPropsTypes {
	id: string,
	type: string,
	label: string,
	placeholder: string,
	value: string,
	state: 'default' | 'filled' | 'active' | 'disabled' | 'error',
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
	label: string,
	isSelected?: boolean
};

export interface TextareaPropsTypes {
	label: string,
	text: string,
}

export interface ToastPropsTypes {
	text: string;
	time: number
}
