import React from 'react';
import styles from './select.module.scss';
import * as variables from '../../variables';
import Select, { StylesConfig } from 'react-select';
import { OptionType, SelectPropsTypes } from '../../interfaces';
import { eachMinuteOfInterval, endOfToday, format, startOfToday } from 'date-fns';

const result = eachMinuteOfInterval({
    start: startOfToday(),
	end: endOfToday()
}, {step: 15})

const arrayOfTimeIntervals: string[] = result.map((value) => format(value, 'HH:mm aaa'))

const options: OptionType[] = arrayOfTimeIntervals.map((interval) => ({value: interval, label: interval}))

const customStyles: StylesConfig<OptionType> = {
	control: (base) => ({
		...base, 
		display: 'flex',
		alignItems: 'start',
		width: '90px',
		minHeight: '25px',
		font: '12px/1.2em Inter',
		border: 'none',
	    borderBottom: `${variables.borderValue.grayInputFocused}`,
		marginBottom: '5px',
		paddingBottom: '2px',
		svg: {display: 'none'}
	}),
	menu: (base) => ({
        ...base,
		width: '90px',
		backgroundColor: `${variables.colors.white}`,
		border: '1px solid #dee0e5',
		borderRadius: '8px',
		boxShadow: '0 4px 4px 0 rgba(69, 69, 69, .05)',
		marginBottom: '30px'
	}),
	option: (base, {isSelected}) => ({
		...base,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		font: '15px Inter',
		color: `${variables.colors.darkIconDefault}`,
		padding: '10px 3px',
		backgroundColor: `${ isSelected ? '#e3e3e3' : 'none' }`,
		'&:hover': {cursor: 'pointer', backgroundColor: '#f6f6f6'}
	})
}

const CustomSelect: React.FC<SelectPropsTypes> = ({label, placeholder}) => {
    return (
		<form className={styles.selectForm} data-testid='select'>
		    <label className={styles.label} htmlFor='time'>{label}</label>
		    <Select 
			    options={options} 
				unstyled 
				styles={customStyles} 
				placeholder={placeholder} 
				name='time' 
				inputId='time'
			/>
		</form>
	)
}

export default CustomSelect;