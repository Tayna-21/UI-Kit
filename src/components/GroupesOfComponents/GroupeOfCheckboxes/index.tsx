import React from "react";
import Checkbox from "../../Checkbox";
import { CheckboxHolder } from "./styles";

const GroupeOfCheckboxes: React.FC = () => {
    return (
		<CheckboxHolder>
		    <Checkbox id='1' checked={true} />
		    <Checkbox id='2' checked={false} />
		    <Checkbox id='3' checked={true} label={'Text'} />
		    <Checkbox id='4' checked={false} label={'Text'} />
		</CheckboxHolder>
	)
}

export default GroupeOfCheckboxes;