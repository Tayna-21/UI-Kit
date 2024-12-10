import React from 'react';
import { ButtonPropsTypes } from '../../../interfaces';
import { ButtonsHolder } from './styles.ts';
import Button from '../../Button';

const GroupeOfButtons: React.FC = () => {
	const buttonProps: ButtonPropsTypes = {
        variant: 'primary',
        isIcon: false,
		value: 'button',
		disabled: false,
        onClick: () => console.log('clicked')
    }
    
	return (
		<ButtonsHolder>
			<Button {...buttonProps} />
			<Button {...buttonProps} isIcon={true} />
			<Button {...buttonProps} variant={'secondary'} />
			<Button {...buttonProps} variant={'secondary'} isIcon={true} />
			<h2>Default</h2>
            <Button {...buttonProps} disabled={true} />			
            <Button {...buttonProps} disabled={true} isIcon={true} />
            <Button {...buttonProps} variant={'secondary'}  disabled={true} />
            <Button {...buttonProps} variant={'secondary'} disabled={true} isIcon={true} />
	        <h2>Disabled</h2>
            <Button {...buttonProps} state={'hover'} />
            <Button {...buttonProps} state={'hover'} isIcon={true} />
            <Button {...buttonProps} variant={'secondary'} state={'hover'} />
		    <Button {...buttonProps} variant={'secondary'} state={'hover'} isIcon={true} />
            <h2>Hover</h2>
            <Button {...buttonProps} state={'active'} />
            <Button {...buttonProps} state={'active'} isIcon={true} />
            <Button {...buttonProps} variant={'secondary'} state={'active'} />
            <Button {...buttonProps} variant={'secondary'} state={'active'} isIcon={true} />
            <h2>Pressed</h2>
		</ButtonsHolder>
	)
}

export default GroupeOfButtons;

