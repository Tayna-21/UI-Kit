import styled from 'styled-components';
import * as variables from '../../variables';

export const InputsHolder = styled.div`
    position: relative;
    display: flex;
	flex-direction: column;
	justify-content: space-between;

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

	span {
	    font: 10px/1.5em Inter;
	    color: ${variables.colors.red};
	}
`

export const StyledInput = styled.input<{type: string, $state: 'default' | 'filled' | 'active' | 'disabled' | 'error'}>`
    width: 300px;
	height: 25px;
	border-bottom: 1px solid ${(props) => props.$state === 'active' ? 
		                        variables.colors.darkDefault : props.$state === 'error' ?
		                        variables.colors.red :
		                        variables.colors.darkDisabled};
	padding: 5px 0;
	font: 15px Inter;
	color: ${(props) => props.$state === 'disabled' ? variables.colors.darkDisabled : variables.colors.darkDefault};
	background: none;

	&::placeholder {
	    font: 15px Inter;
		color: ${variables.colors.darkDefault};
	}

	&::-webkit-credentials-auto-fill-button {
    background-color: white !important;
}
`