import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from './index.tsx';
import 'jest-styled-components';

test('component Checkbox should be rendered', () => {
	render(<Checkbox value={'Text'} isLabel={false} isChecked={false} />)

	const checkbox = screen.getByRole('checkbox')
	expect(checkbox).toBeInTheDocument()
})

test('Checkbox should be checked', () => {
	render(<Checkbox value={'Text'} isLabel={false} isChecked={false} />)

	const checkbox = screen.getByRole('checkbox')
	fireEvent.click(checkbox)

	expect(checkbox).toBeChecked()
})