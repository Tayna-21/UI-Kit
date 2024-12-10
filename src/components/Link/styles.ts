import styled from 'styled-components';
import { colors } from '../../variables';

export const StyledButton = styled.button`
    background: none;
	border: none;
	width: fit-content;
	padding: 0;

	&:disabled {
	    pointer-events: none;
	}

	&:disabled > a {
	    color: ${colors.darkLinkDisabled};
		text-decoration: none;
	}
`

export const StyledLink = styled.a`
    font: bold 15px/1.5em Roboto;
	color: ${colors.green};

	&:hover, &[data-state='hover'] {
	   text-decoration: underline;
	}

	&:active, &[data-state='active'] {
	    color: ${colors.greenBright};
		text-decoration: underline;
	}
`