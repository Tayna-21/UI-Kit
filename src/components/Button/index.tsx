import React from 'react';
import { ButtonPropsTypes } from '../../interfaces';
import { StyledButton } from './styles';
import PlayIcon from '../Icons/PlayIcon';

const Button: React.FC<ButtonPropsTypes> = ({ 
	primary, 
	icon, 
	state,
	onClick
}) => {
	return (
		<StyledButton 
		    type="button"
		    $primary={primary}
		    $icon={icon} 
			$state={state}
			onClick={onClick}
		>
		    { icon && <PlayIcon /> } Button
		</StyledButton>
	)
}

export default Button;