import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.scss';
import CloseIcon from '../Icons/CloseIcon';
import { ModalPropsTypes } from '../../interfaces';

const Modal: React.FC<ModalPropsTypes> = ({title, text}) => {
	const [modalVisible, setModalVisible] = useState<boolean>(false);

	useEffect(() => {
        setModalVisible(true)
	}, [])

	const closeModal = (): void => {
       setModalVisible(false);
	}

    return ReactDOM.createPortal(
        (modalVisible && <div className={styles.modal} data-testid='modal'>
			<div className={styles.container}>
			    <header>
					<h3>{title}</h3>
					<button type='button' onClick={closeModal}><CloseIcon /></button>
				</header>
			    <main>
			        <p>{text}</p>
			    </main>
			</div>
		</div>),
		document.body
	);
}

export default Modal;