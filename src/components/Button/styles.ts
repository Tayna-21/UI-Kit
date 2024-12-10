import styled from 'styled-components';
import { colors, borderValue, shadowValue } from '../../variables';

export const StyledButton = styled.button<{ 
	$variant: 'primary' | 'secondary'
}>`
    display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	border-radius: 8px;
	height: 36px;
	font: 15px/1em Roboto;
	text-transform: capitalize;
	padding: 12px 10px;
	background-color: ${(props) => (props.$variant === 'primary' ? colors.green : colors.white)};
	border: ${(props) => (props.$variant === 'primary' ? 'none' : borderValue.grayButtonDefault)};
	color: ${(props) => (props.$variant === 'primary' ? colors.white : colors.darkIconDefault)};
	box-shadow: ${shadowValue.default};

	svg path {
	    fill: ${(props) => (props.$variant === 'primary' ? colors.white : colors.darkIconDefault)};
		stroke: ${(props) => (props.$variant === 'primary' ? colors.white : colors.darkIconDefault)};
	}

	&:hover, &[data-state='hover'] {
	    background-color: ${(props) => (props.$variant === 'primary' ? colors.green : colors.grayButtonHover)};
		border: ${(props) => (props.$variant === 'primary' ? borderValue.green : borderValue.grayButtonDefault)};
		box-shadow: ${(props) => (props.$variant === 'primary' ? shadowValue.primary : shadowValue.secondary)};
		cursor: pointer;
		transition: .2s ease-in;
		will-change: transform;
	}

	&:active, &[data-state='active'] {
	    background-color: ${(props) => (props.$variant === 'primary' ? colors.greenBright : colors.grayButtonActive)};
		border: ${(props) => (props.$variant === 'primary' ? borderValue.green : borderValue.grayButtonDefault)};
		box-shadow: ${(props) => (props.$variant === 'primary' ? shadowValue.primary : shadowValue.secondary)};
		transition: .2s ease-in;
		will-change: transform;
	}

	&:disabled {
	    background-color: ${(props) => (props.$variant === 'primary'? colors.greenDark : colors.grayButtonDisabled)};
		border: ${(props) => (props.$variant === 'primary' ? 'none' : borderValue.grayButtonDisabled)};
		color: ${(props) => (props.$variant === 'primary' ? colors.gray : colors.darkIconDisabled)};
	}

	&:disabled > svg path {
        fill: ${(props) => (props.$variant === 'primary' ? colors.gray : colors.darkIconDisabled)};
		stroke: ${(props) => (props.$variant === 'primary' ? colors.gray : colors.darkIconDisabled)};
	}
`;