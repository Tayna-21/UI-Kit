import styled from 'styled-components';
import { colors, borderValue, shadowValue } from '../../variables';

export const StyledButton = styled.button<{ 
	$primary: boolean, 
	$icon: boolean, 
	$state: 'default'| 'disabled'| 'hover'| 'active'
}>`
    display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	border-radius: 8px;
	width: ${(props) => (props.$icon ? '83px' : '63px') };
	height: 36px;
	font: 15px/1em Roboto;
	padding: 12px 10px;
	cursor: pointer;

	background-color: ${(props) => {
        if (props.$state === 'disabled') 
			return props.$primary ? colors.greenDisabled : colors.grayDisabled;
        if (props.$state === 'hover') 
			return props.$primary ? colors.greenDefault : colors.grayHover;
        if (props.$state === 'active') 
			return props.$primary ? colors.greenActive : colors.grayActive;

        return props.$primary ? colors.greenDefault : colors.white; 
    }};

	border: ${(props) => {
        if (props.$state === 'disabled') 
			return props.$primary ? 'none' : borderValue.grayDisabled;
        if (props.$state === 'hover' || props.$state === 'active') 
			return props.$primary ? borderValue.green : borderValue.grayDefault;

		return props.$primary ? 'none' : borderValue.grayDefault;
	}};

	color: ${(props) => {
		if (props.$state === 'disabled') return props.$primary ? colors.gray : colors.darkDisabled;

		return props.$primary ? colors.white : colors.darkDefault;
	}};

	box-shadow: ${(props) => {
        if (props.$state === 'hover' || props.$state === 'active')
			return props.$primary ? shadowValue.primary : shadowValue.secondary;

        return shadowValue.default;
	}};

	svg path {
	    fill: ${(props) => {
			if (props.$state === 'disabled') return props.$primary ? colors.gray :  colors.darkDisabled;

			return props.$primary ? colors.white : colors.darkDefault;
		}};

		stroke: ${(props) => {
			if (props.$state === 'disabled') return props.$primary ? colors.gray :  colors.darkDisabled;

			return props.$primary ? colors.white : colors.darkDefault;
		}};
	}
`;