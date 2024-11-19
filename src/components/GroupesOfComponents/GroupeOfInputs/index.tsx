import React from 'react';
import Input from '../../Input';
import { InputPropsTypes } from '../../../interfaces';
import { InputsHolder } from './styles';

const GroupeOfInputs: React.FC = () => {
	const userNameProps: InputPropsTypes = {
		id: "1",
		type: "text",
		label: "Username",
		placeholder: "Enter your username",
		state: 'default',
		value: 'Some user\'s information'
	};

	const passwordProps: InputPropsTypes = {
		id: "2",
		type: "password",
		label: "Password",
		placeholder: "Enter your password",
		state: 'default',
		value: '12345'
	};

	return (
        <InputsHolder>
		    <Input {...userNameProps} value={''} />
			<Input {...passwordProps} value={''} />
			<h2>Default</h2>
			<Input {...userNameProps} state={'filled'} />
			<Input {...passwordProps} state={'filled'} />
			<h2>Filled</h2>
			<Input {...userNameProps} state={'active'} />
			<Input {...passwordProps} state={'active'} />
			<h2>Active</h2>
			<Input {...userNameProps} state={'disabled'} />
			<Input {...passwordProps} state={'disabled'} />
			<h2>Disabled</h2>
			<Input {...userNameProps} state={'error'} />
			<Input {...passwordProps} state={'error'} />
			<h2>Error</h2>
		</InputsHolder>
	)
}

export default GroupeOfInputs;