import React from 'react';
import styles from './textarea.module.scss';
import { TextareaPropsTypes } from '../../interfaces';

const Textarea: React.FC<TextareaPropsTypes> = ({label}) => {
	return (
		<div className={styles.textareaContainer}>
		    <label htmlFor='message'>{label}</label>
            <textarea id='message' name='message'></textarea>
		</div>
	)
}

export default Textarea;