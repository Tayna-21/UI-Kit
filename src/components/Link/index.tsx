import React from 'react';
import { StyledLink } from './styles';
import { LinkPropsTypes } from '../../interfaces';

const Link: React.FC<LinkPropsTypes> = ({state}) => {
	return (
        <StyledLink href="#" $state={state}>
			Link
		</StyledLink>
	)
}

export default Link;