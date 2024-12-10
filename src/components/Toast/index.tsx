import React, { useState, useEffect } from 'react';
import styles from './toast.module.scss';
import CloseIcon from '../Icons/CloseIcon';
import { ToastPropsTypes } from '../../interfaces';
import DeleteIcon from '../Icons/DeleteIcon';


const Toast: React.FC<ToastPropsTypes> = ({text, time}) => {
	const [visibleToast, setVisibleToast] = useState<boolean>(false);
	const [visibleEvent, setVisibleEvent] = useState<boolean>(true)

	useEffect(() => {
        if (visibleToast) {
            const timeoutId = setTimeout(() => setVisibleToast(false), time)
			
			return () => clearTimeout(timeoutId)
		}
	}, [visibleToast])

	const showToast = () => {
		setVisibleToast(true)
		setVisibleEvent(false)
	}

	const closeToast = () => {
		setVisibleToast(false);
	};

    return (
		<>
		    { visibleEvent && <div className={styles.event} data-testid='event'>
				<p>Event</p>
			    <button type='button' className={styles.deleteButton} onClick={showToast}><DeleteIcon /></button>
		    </div>}
		    {visibleToast && <div className={styles.toast} data-testid='toast'>
		         {text} 
		        <button type='button' className={styles.button} onClick={closeToast}><CloseIcon /></button>
	        </div>}
	    </>
	) 
}

export default Toast;

