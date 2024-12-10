import React, { useState } from 'react';
import { InputsHolder, StyledInput } from './styles';
import { InputPropsTypes } from '../../interfaces';
import EyeClosedIcon from '../Icons/EyeClosedIcon';
import EyeIcon from '../Icons/EyeIcon';

const Input: React.FC<InputPropsTypes> = ({type, id, value, placeholder, label, disabled, isInvalid, state}) => {
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
				value={value}
				data-state={state}
				autoComplete="off" 
				disabled={disabled}
				aria-invalid={isInvalid}
				onChange={() => {}}
			/>
			{ type === 'password' && <button type='button' onClick={manipulatePasswordVisibility} disabled={disabled}>{icon}</button> }
			{ isInvalid && <span>Error message</span> }
		</InputsHolder>
	)
}

export default Input;