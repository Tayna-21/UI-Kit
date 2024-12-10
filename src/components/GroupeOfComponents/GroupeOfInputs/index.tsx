import React from 'react';
import Input from '../../Input';
import { InputPropsTypes } from '../../../interfaces';
import { InputsHolder } from './styles';

const GroupeOfInputs: React.FC = () => {
	const userNameProps: InputPropsTypes = {
		id: "user",
		type: "text",
		label: "username",
		placeholder: "Enter your username",
		disabled: false,
		isInvalid: false
	};

	const passwordProps: InputPropsTypes = {
		id: "password",
		type: "password",
		label: "password",
		placeholder: "Enter your password",
		disabled: false,
		isInvalid: false
	};

	return (
        <InputsHolder>
		    <Input {...userNameProps} />
			<Input {...passwordProps} />
			<h2>Default</h2>
			<Input {...userNameProps} value={'user info'} state={'filled'} />
			<Input {...passwordProps} value={'12345'} state={'filled'} />
			<h2>Filled</h2>
			<Input {...userNameProps} value={'user info'} state={'active'} />
			<Input {...passwordProps} value={'12345'} state={'active'} />
			<h2>Active</h2>
			<Input {...userNameProps} value={'user info'} disabled={true} />
			<Input {...passwordProps} value={'12345'} disabled={true} />
			<h2>Disabled</h2>
			<Input {...userNameProps} value={'user info'} isInvalid={true} />
			<Input {...passwordProps} value={'12345'} isInvalid={true} />
			<h2>Error</h2>
		</InputsHolder>
	)
}

export default GroupeOfInputs;