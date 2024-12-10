import React, { useState } from "react";
import { StyledInputContainer, StyledCheckbox } from "./styles";
import { CheckboxPropsTypes } from "../../interfaces";

const Checkbox: React.FC<CheckboxPropsTypes> = ({value, isLabel, isChecked}) => {
	const [checked, setChecked] = useState<boolean>(isChecked);

	const handleChange = () => {
        setChecked(!checked)
	};

    return (
		<StyledInputContainer>
		    <StyledCheckbox type="checkbox" id={value} name={value} value={value} defaultChecked={checked} onClick={handleChange}/>
			{isLabel && <label htmlFor={value}>{value}</label>}
		</StyledInputContainer> 
	) 
}

export default Checkbox;