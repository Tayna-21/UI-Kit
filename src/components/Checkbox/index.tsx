import React, { useState } from "react";
import { StyledInputContainer, StyledCheckbox } from "./styles";
import { CheckboxPropsTypes } from "../../interfaces";

const Checkbox: React.FC<CheckboxPropsTypes> = ({checked, label, id}) => {
	const [isChecked, setChecked] = useState<boolean>(checked);

	const handleClick = () => {
        setChecked(!isChecked)
	};

    return label ? (
		<StyledInputContainer>
		    <StyledCheckbox type="checkbox" id={id} name="#" value={label} $checked={isChecked} onClick={handleClick}/>
			<label htmlFor={id}>{label}</label>
		</StyledInputContainer> ) : (
		<StyledCheckbox type="checkbox" id={id} name="#" value={label} $checked={isChecked} onClick={handleClick}/> 
		
	)
}

export default Checkbox;