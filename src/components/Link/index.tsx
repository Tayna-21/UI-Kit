import React from 'react';
import { StyledButton, StyledLink } from './styles';
import { LinkPropsTypes } from '../../interfaces';

const Link: React.FC<LinkPropsTypes> = ({disabled, state}) => {
	return (
		<StyledButton type='button' disabled={disabled} data-testid='button-as-link'>
            <StyledLink href="#" data-state={state}>
			    Link
		    </StyledLink>
		</StyledButton>
	)
}

export default Link;