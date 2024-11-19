import React from 'react';
import styles from './icons.module.scss';
import CheckboxIcon from '../../Icons/CheckboxIcon';
import CheckboxFillIcon from '../../Icons/CheckboxFillIcon';
import EyeClosedIcon from '../../Icons/EyeClosedIcon';
import EyeIcon from '../../Icons/EyeIcon';
import ChevronRightIcon from '../../Icons/ChevronRightIcon';
import PlayIcon from '../../Icons/PlayIcon';
import PauseIcon from '../../Icons/PauseIcon';
import CheckedIcon from '../../Icons/CheckedIcon';
import PlusIcon from '../../Icons/PlusIcon';
import MinusIcon from '../../Icons/MinusIcon';
import UserIcon from '../../Icons/UserIcon';
import TruckIcon from '../../Icons/TruckIcon';
import InfoIcon from '../../Icons/InfoIcon';
import ChevronUpIcon from '../../Icons/ChevronUpIcon';
import TrashIcon from '../../Icons/TrashIcon';
import CartIcon from '../../Icons/CartIcon';
import DefaultIcon from '../../Icons/DefaultIcon';
import ChevronDownIcon from '../../Icons/ChevronDownIcon';
import ChevronLeftIcon from '../../Icons/ChevronLeftIcon';
import LogoutIcon from '../../Icons/LogoutIcon';
import EditIcon from '../../Icons/EditIcon';
import DeleteIcon from '../../Icons/DeleteIcon';
import ColorIcon from '../../Icons/ColorIcon';
import ColorSelectedIcon from '../../Icons/ColorSelectedIcon';
import DownIcon from '../../Icons/DownIcon';
import CloseIcon from '../../Icons/CloseIcon';
import GoogleIcon from '../../Icons/GoogleIcon';


const GroupeOfIcons: React.FC = () => {
    return (
		<div className={styles.iconsHolder}>
			<EyeClosedIcon />
			<EyeIcon />
			<ChevronRightIcon />
			<PlayIcon />
			<PauseIcon />
			<CheckedIcon />
			<PlusIcon />
			<MinusIcon />
			<UserIcon />
			<TruckIcon />
			<InfoIcon />
			<ChevronUpIcon />
			<TrashIcon />
			<CartIcon />
			<DefaultIcon />
			<GoogleIcon />
			<ChevronDownIcon />
			<ChevronLeftIcon />
			<LogoutIcon />
		    <CheckboxIcon />
			<CheckboxFillIcon />
			<EditIcon />
			<DeleteIcon />
			<ColorIcon />
			<ColorSelectedIcon />
			<DownIcon />
			<CloseIcon />
		</div>
	)
}

export default GroupeOfIcons;