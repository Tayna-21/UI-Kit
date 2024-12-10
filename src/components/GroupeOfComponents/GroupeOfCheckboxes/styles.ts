import styled from "styled-components";
import * as variables from '../../../variables';
 
export const CheckboxHolder = styled.div`
    display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto;
	gap: 30px 15px;
	align-items: end;
    width: fit-content;
	height: fit-content;
    padding: 15px 20px;
    border-radius: ${variables.borderValue.borderRadius};
	border: ${variables.borderValue.grayButtonDisabled};

	& > div {
	    grid-column-start: 1;
		grid-column-end: 3;
	}
`