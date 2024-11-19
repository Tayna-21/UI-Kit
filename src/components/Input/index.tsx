import React, { useState } from 'react';
import { InputsHolder, StyledInput } from './styles';
import { InputPropsTypes } from '../../interfaces';
import EyeClosedIcon from '../Icons/EyeClosedIcon';
import EyeIcon from '../Icons/EyeIcon';

const Input: React.FC<InputPropsTypes> = ({type, id, placeholder, label, state, value}) => {
	const [inputType, setInputType] = useState<string>(type);
	const [icon, setIcon] = useState<React.ReactNode>(<EyeClosedIcon />);

	const manipulatePasswordVisibility = (): void => {
		if (inputType === 'password') {
			setInputType('text');
			setIcon(<EyeIcon />);
		} else {
			setInputType('password');
			setIcon(<EyeClosedIcon />);
		}
	};

	return(
		<InputsHolder>
		    <label htmlFor={id}>{label}*</label>
            <StyledInput 
			    type={inputType} 
				id={id} 
				name={label} 
				placeholder={placeholder} 
				$state={state} 
				value={value} 
				autoComplete="off" 
				disabled={ state === 'disabled' ? true : false }
			/>
			{ type === 'password' && <button type='button' onClick={manipulatePasswordVisibility}>{icon}</button> }
			{ state === 'error' && <span>Error message</span> }
		</InputsHolder>
	)
}

export default Input;