import { render, screen } from '@testing-library/react';
import CustomSelect from './index.tsx';
import selectEvent from 'react-select-event';

test('component Select should be rendered', () => {
	render(<CustomSelect label={'time'} placeholder={'select time'} />)

	const selectComponent = screen.getByTestId('select')
	expect(selectComponent).toBeInTheDocument()
})

test('after click on option, option\'s value should be rendered in Select field', async () => {
	render(<CustomSelect label={'time'} placeholder={'select time'} />)

	const selectComponent = screen.getByTestId('select')
	const selectField = screen.getByLabelText(/time/i)
	
	expect(selectComponent).toHaveFormValues({time: ''})
	await selectEvent.select(selectField, '10:15 am')

	expect(selectComponent).toHaveFormValues({time: '10:15 am'})
})