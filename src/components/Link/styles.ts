import styled from 'styled-components';
import { colors } from '../../variables';

export const StyledLink = styled.a<{$state: 'default' | 'disabled' | 'hover' | 'active'}>`
    font: bold 15px/1.5em Roboto;

	color: ${(props) => {
		if (props.$state === 'default') 
			return colors.greenDefault;
		if (props.$state === 'disabled') 
			return colors.darkLinkDisabled;
		if (props.$state === 'hover') 
			return colors.greenDefault;
		if (props.$state === 'active') 
			return colors.greenActive;
	}};

	text-decoration: ${(props) => ( props.$state === 'hover' || props.$state === 'active' ? 'underline' : 'none' )};
`