import styled from 'styled-components';
import * as variables from '../../variables';

export const InputsHolder = styled.div`
    position: relative;
    display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: fit-content;

	label {
	    font: bold 10px/1em Inter;
	    text-transform: capitalize;
	}

	button {
		position: absolute;
		top: 20px;
		right: 0;
		width: fit-content;
		background: none;
        padding: 0;
	}

	button:hover {
	    cursor: pointer;
	}

	button:disabled > svg path {
	    fill: ${variables.colors.darkIconDisabled};
	}

	span {
	    font: 10px/1.5em Inter;
	    color: ${variables.colors.red};
	}
`

export const StyledInput = styled.input<{type: string}>`
    width: 300px;	
	border-bottom: ${variables.borderValue.grayInput};
	padding: .5em 0;
	font: 15px Inter;
	background: none;
	color: ${variables.colors.darkIconDefault};

	&::placeholder {
	    font: 15px Inter;
		color: ${variables.colors.darkIconDefault};
	}

	&:focus, &[data-state='active'] {
	    border-bottom: ${variables.borderValue.grayInputFocused};
	}

    &:invalid, &[aria-invalid='true'] {
	    border-bottom: 1px solid ${variables.colors.red};
	}

	&:disabled {
	    color: ${variables.colors.darkIconDisabled};
	}

	&:disabled::placeholder {
	    color: ${variables.colors.darkIconDisabled};
	}
`