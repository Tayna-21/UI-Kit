import React from "react";
import Checkbox from "../../Checkbox";
import { CheckboxHolder } from './styles';

const GroupeOfCheckboxes: React.FC = () => {
    return (
		<CheckboxHolder>
		    <Checkbox value={'text'} isLabel={false} isChecked={true} />
		    <Checkbox value={'text'} isLabel={false} isChecked={false} />
		    <Checkbox value={'text'} isLabel={true} isChecked={true} />
		    <Checkbox value={'text'} isLabel={true} isChecked={false} />
		</CheckboxHolder>
	)
}

export default GroupeOfCheckboxes;