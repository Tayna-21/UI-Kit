import { render, screen, within, fireEvent } from '@testing-library/react';
import Modal from './index.tsx';

test('component Modal should be rendered', () => {
	render(<Modal title={'Title'} text={'lorem ipsum'} />)

	const modal = screen.getByTestId('modal')
	expect(modal).toBeInTheDocument()
})

test('after click on closeButton, component Modal should be unmounted', () => {
	render(<Modal title={'Title'} text={'lorem ipsum'} />)

	const modal = screen.getByTestId('modal')
	const button = within(modal).getByRole('button')

    fireEvent.click(button)
    expect(modal).not.toBeInTheDocument()
})