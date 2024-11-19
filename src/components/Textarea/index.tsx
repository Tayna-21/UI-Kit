import React from 'react';
import styles from './textarea.module.scss';
import { TextareaPropsTypes } from '../../interfaces';

const Textarea: React.FC<TextareaPropsTypes> = ({label, text}) => {
	return (
		<div className={styles.textareaContainer}>
		    <label htmlFor='message'>{label}</label>
            <textarea id='message' name='message' rows={7} cols={50}>{text}</textarea>
		</div>
	)
}

export default Textarea;