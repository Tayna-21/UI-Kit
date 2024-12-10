import React, { useState } from 'react';
import styles from './dropdown.module.scss';
import DownIcon from '../Icons/DownIcon';
import { DropdownListEnum } from '../../constants';

const Dropdown: React.FC = () => {
	const [selectedValue, setSelectedValue] = useState<DropdownListEnum>(DropdownListEnum.WEEK);
	const [dropdownVisibility, setDropdownVisibility] = useState<boolean>(false);
 
	const handleDropdownVisibility = (): void => {
		setDropdownVisibility(!dropdownVisibility)
	}

	const selectNewValue = (item: DropdownListEnum): void => {
		setSelectedValue(item);
		setDropdownVisibility(false);
	}

    return (
		<div className={styles.dropdownContainer} data-testid="dropdown">        
			<button className={styles.button} type='button' onClick={handleDropdownVisibility}>{selectedValue} <DownIcon /></button>
                { dropdownVisibility && <ul className={styles.dropdownList} data-testid="dropdownList">
				    {Object.values(DropdownListEnum).map((item, index) => {
                        return (
						    <li key={index} onClick={() => selectNewValue(item)}>{item}</li>
					    )
				    })}
			    </ul>}
		</div>
	)
}

export default Dropdown;