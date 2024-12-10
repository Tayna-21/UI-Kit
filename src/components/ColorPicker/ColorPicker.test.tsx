import { fireEvent, render, screen, within } from '@testing-library/react';
import ColorPicker from './index.tsx';

test('component ColorPicker should be rendered with default selected color', () => {
	render(<ColorPicker />)

	const colorPicker = screen.getByTestId('colorPicker')
	expect(colorPicker).toBeInTheDocument()

	const defaultSelectedColor = within(colorPicker).getByDisplayValue('#d90056')
	expect(defaultSelectedColor).toBeChecked()
})

test('click on color-icon should select new color', () => {
	render(<ColorPicker />)

	const colorPicker = screen.getByTestId('colorPicker')
	const defaultSelectedColor = within(colorPicker).getByDisplayValue('#d90056')
	const newColor = within(colorPicker).getByDisplayValue('#439bdf')
	fireEvent.click(newColor)

	expect(newColor).toBeChecked()

	expect(defaultSelectedColor).not.toBeChecked()
})

test('click on the last color-icon in component should render color palette', () => {
	render(<ColorPicker />)

	const paletteToggler = screen.getByTestId('paletteToggler')
	fireEvent.click(paletteToggler)

	const palette = screen.getByTestId('palette')
	expect(palette).toBeInTheDocument()

	fireEvent.click(paletteToggler)
	expect(palette).not.toBeInTheDocument()
})