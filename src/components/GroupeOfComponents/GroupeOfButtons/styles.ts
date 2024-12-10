import styled from 'styled-components';
import * as variables from '../../../variables';

export const ButtonsHolder = styled.div`
display: grid;
grid-template-columns: repeat(5, max-content);
grid-template-rows: auto;
gap: 15px 30px;
width: fit-content;
padding: 15px 20px;
border-radius: ${variables.borderValue.borderRadius};
border: ${variables.borderValue.grayButtonDisabled};

h2 {
	font: 20px Inter;
	color: ${variables.colors.darkIconDefault};
	align-self: center;
}
`