import styled from 'styled-components';
import * as variables from '../../../variables';

export const InputsHolder = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr max-content;
	grid-template-rows: auto;
	gap: 30px 50px;
    width: fit-content;
    padding: 15px 20px;
    border-radius: ${variables.borderValue.borderRadius};
	border: ${variables.borderValue.grayButtonDisabled};

	h2 {
	    font: 20px Inter;
		align-self: center;
	}
`