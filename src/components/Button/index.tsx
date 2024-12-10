import React from 'react';
import { ButtonPropsTypes } from '../../interfaces';
import { StyledButton } from './styles';
import PlayIcon from '../Icons/PlayIcon';

const Button: React.FC<ButtonPropsTypes> = ({ 
	variant, 
	isIcon, 
	state,
	value,
	disabled,
	onClick
}) => {
	return (
		<StyledButton 
		    type="button"
		    $variant={variant}
			data-state={state}
			disabled={disabled}
			name={value}
			value={value}
			onClick={onClick}
		>
		    { isIcon && <PlayIcon /> } {value}
		</StyledButton>
	)
}

export default Button;