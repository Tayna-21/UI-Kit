import styled from "styled-components";
import * as variables from "../../../variables";

export const LinksHolder = styled.div`
    display: grid;
	grid-template-columns: repeat(2, auto);
	grid-template-rows: auto;
	gap: 15px 30px;
	align-items: center;
    width: fit-content;
    padding: 15px 20px;
    border-radius: ${variables.borderValue.borderRadius};
	border: ${variables.borderValue.grayButtonDisabled};

	& h2 {
	    font: 20px Inter;
	    color: ${variables.colors.darkIconDefault};
	}
`