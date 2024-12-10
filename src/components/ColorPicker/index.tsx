import React, { useState, useEffect } from 'react';
import styles from './colorPicker.module.scss';
import Sketch from '@uiw/react-color-sketch';
import { defaultColors } from '../../constants';

const ColorPicker: React.FC = () => {
	const defaultColor = 'linear-gradient(45deg, #f907b0 25%,  #4705d3 75%)';
	const [paletteVisible, setPaletteVisible] = useState<boolean>(false);
	const [createdColor, setCreatedColor] = useState<string>(defaultColor)
	const [colors, setColors] = useState<string[]>(defaultColors);
	const [selectedColor, setSelectedColor] = useState<string>('#d90056');
	const maxLengthArrayOfColors: number = 20;
   
	useEffect(() => {
        if (colors.length === maxLengthArrayOfColors) {
			const newArrayOfColors = [...colors];
			newArrayOfColors.shift()

			setColors(newArrayOfColors)
		}
	}, [colors])

	const selectColor = (event: React.MouseEvent<HTMLInputElement>): void => {
		const color: string = (event.target as HTMLInputElement).value;
        
		setSelectedColor(color);
	}

	const showPalette = (): void => {
		setPaletteVisible(!paletteVisible);

		if (paletteVisible && createdColor !== defaultColor) {
			setColors([...colors, createdColor]);
			setCreatedColor(defaultColor);
		};
	};

	const createNewColor = ({ hex }: {hex: string}): void => {
		setCreatedColor(hex)
	};

	return (
		<div className={styles.colorPickerWrapper}>
			<h6>Color</h6>
            <div className={styles.colorPickerContainer} data-testid='colorPicker'>
				{colors && colors.map((color, index) => 
				    <input key={index} type='radio' value={color} style={{backgroundColor: `${color}`}} name='color' defaultChecked={color === selectedColor ? true : false} onClick={selectColor}/>
				)}
				<div className={styles.paletteWindow} style={{background: `${createdColor}`}} role='button' onClick={showPalette} data-testid='paletteToggler'></div>
                    {paletteVisible && 
				    <div className={styles.paletteWrapper} data-testid='palette'>
						<Sketch color={createdColor} onChange={createNewColor} />
					</div>}
			</div>
		</div>
	)
};

export default ColorPicker;
