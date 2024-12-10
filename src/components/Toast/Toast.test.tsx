import { fireEvent, render, screen, within } from '@testing-library/react';
import Toast from './index.tsx';

test('after click on deleteButton, component Toast should be rendered', () => {
	render(<Toast text={'Event deleted'} time={6000} />)

	const event = screen.getByTestId('event')
	expect(event).toBeInTheDocument()

	const deleteButton = within(event).getByRole('button')
	expect(deleteButton).toBeInTheDocument()

	fireEvent.click(deleteButton)
	const toast = screen.getByTestId('toast')
	
	expect(toast).toBeInTheDocument()
})

test('when Toast mounted, in 6 seconds it should be unmounted with setTimeout()', async () => {
	jest.useFakeTimers()
	jest.spyOn(global, 'setTimeout');

	render(<Toast text={'Event deleted'} time={6000} />)

	const event = screen.getByTestId('event')
	const deleteButton = within(event).getByRole('button')

	fireEvent.click(deleteButton)
	
    expect(setTimeout).toHaveBeenCalledTimes(1)
	expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),6000)
})

test('after click on closeButton Toast should be unmonted', () => {
	render(<Toast text={'Event deleted'} time={6000} />)

	const event = screen.getByTestId('event')
	const deleteButton = within(event).getByRole('button')

	fireEvent.click(deleteButton)
	
	const toast = screen.getByTestId('toast')
    const closeButton = within(toast).getByRole('button')
	
	fireEvent.click(closeButton)
	expect(toast).not.toBeInTheDocument()
})