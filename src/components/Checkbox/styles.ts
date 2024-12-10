import styled from "styled-components";
import * as variables from '../../variables'; 

const uncheckedIconToString = `<svg viewBox=" -2 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6667 1.33333V10.6667H1.33333V1.33333H10.6667ZM10.6667 0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12 0.6 11.4 0 10.6667 0Z" fill="%23323749"/></svg>`;
const checkedIconToString = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.33333 2C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H3.33333ZM11.3 6.53067C11.4251 6.40566 11.4954 6.23608 11.4955 6.05924C11.4955 5.88239 11.4253 5.71276 11.3003 5.58767C11.1753 5.46257 11.0057 5.39226 10.8289 5.3922C10.6521 5.39214 10.4824 5.46233 10.3573 5.58733L7.05733 8.88733L5.64333 7.47333C5.58144 7.41139 5.50795 7.36225 5.42706 7.32871C5.34617 7.29517 5.25947 7.2779 5.1719 7.27787C4.99506 7.2778 4.82543 7.34799 4.70033 7.473C4.57524 7.59801 4.50493 7.76758 4.50487 7.94443C4.5048 8.12128 4.57499 8.29091 4.7 8.416L6.53867 10.2547C6.60677 10.3228 6.68763 10.3768 6.77662 10.4137C6.86561 10.4506 6.961 10.4696 7.05733 10.4696C7.15367 10.4696 7.24905 10.4506 7.33805 10.4137C7.42704 10.3768 7.5079 10.3228 7.576 10.2547L11.3 6.53067Z" fill="%2300ae1c"/></svg>`;

export const StyledInputContainer = styled.div`
    display: flex;
	gap: 5px;
	align-items: center;
	width: fit-content;
`

export const StyledCheckbox = styled.input`
    width: 12px;
	height: 12px;
	background-image: url('data:image/svg+xml,${uncheckedIconToString}'); 
	background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
	margin: 0;

	& + label {
	    font: 12px Inter;
		color: ${variables.colors.darkIconDefault};
		text-transform: capitalize;
	}

	&:hover {
	cursor: pointer;
	}

	&:checked {
	    background-image: url('data:image/svg+xml,${checkedIconToString}');
	}
`