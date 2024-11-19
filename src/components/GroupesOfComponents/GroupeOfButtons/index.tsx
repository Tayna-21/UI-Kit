import React from 'react';
import Button from '../../Button';
import { ButtonPropsTypes } from '../../../interfaces';
import { ButtonsHolder } from './styles';

const GroupeOfButtons: React.FC = () => {
	const buttonProps: ButtonPropsTypes = {
        primary: false,
        icon: false,
        state: 'default',
        onClick: () => console.log('clicked')
    }
    
	return (
		<ButtonsHolder>
		    <Button {...buttonProps} primary={true} state='default' />
            <Button {...buttonProps} primary={true} icon={true} state='default' />
            <Button {...buttonProps} state='default' />
            <Button {...buttonProps} icon={true} state='default' />
            <h2>Default</h2>
            <Button {...buttonProps} primary={true} state='disabled' />
            <Button {...buttonProps} primary={true} icon={true} state='disabled' />
            <Button {...buttonProps} state='disabled' />
            <Button {...buttonProps} icon={true} state='disabled' />
            <h2>Disabled</h2>
            <Button {...buttonProps} primary={true} state='hover' />
            <Button {...buttonProps} primary={true} icon={true} state='hover' />
            <Button {...buttonProps} state='hover' />
            <Button {...buttonProps} icon={true} state='hover' />
            <h2>Hover</h2>
            <Button {...buttonProps} primary={true} state='active' />
            <Button {...buttonProps} primary={true} icon={true} state='active' />
            <Button {...buttonProps} state='active' />
            <Button {...buttonProps} icon={true} state='active' />
            <h2>Pressed</h2>
		</ButtonsHolder>
	)
}

export default GroupeOfButtons;