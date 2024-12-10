import { fireEvent, render, screen, within } from '@testing-library/react';
import CustomDatePicker from './index.tsx';

describe('component CustomDatePicker should be rendered', () => {
	beforeAll(() => {
		jest.useFakeTimers()
		jest.setSystemTime(new Date('2024-11-04T00:00:00Z'))
	})

	afterAll(() => {
		jest.useRealTimers()
	})

	test('CustomDatePicker should be rendered with selected current day', () => {
		render(<CustomDatePicker />)
	
		const datePicker = screen.getByTestId('datePicker')
		expect(datePicker).toBeInTheDocument()

		const currentDay = within(datePicker).getByText('4')
		expect(currentDay).toBeInTheDocument()
		expect(currentDay).toHaveAttribute('class', expect.stringContaining('selected'))
	})
})
 
test('after click on another date, this date should recieve a className "selected"', () => {
	render(<CustomDatePicker />)

	const datePicker = screen.getByTestId('datePicker')
	const date = within(datePicker).getByRole('button', {name: '21'})
	const day = within(date).getByText('21')
	
	fireEvent.click(date)
	expect(day).toHaveAttribute('class', expect.stringContaining('selected'))
})

test('after click on previous/next button, previous/next month should be rendered', () => {
	render(<CustomDatePicker />)

	const month = screen.getByTestId('month')
	expect(month).toBeInTheDocument()

	const monthName = screen.getByText(/december/i)
	const previousButton = within(month).getByTestId('previous-button')	

	fireEvent.click(previousButton)
	expect(monthName).toHaveTextContent(/november/i)

	const nextButton = within(month).getByTestId('next-button')
	fireEvent.click(nextButton)

	expect(monthName).toHaveTextContent(/december/i)
})