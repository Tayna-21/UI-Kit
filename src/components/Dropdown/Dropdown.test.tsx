import { render, screen, fireEvent, within } from '@testing-library/react';
import Dropdown from './index.tsx';

test('component Dropdown should be rendered', () => {
    render(<Dropdown />)
	
	const dropdown = screen.getByTestId('dropdown')
	expect(dropdown).toBeInTheDocument()
    
	const dropdownSelectedField = screen.getByRole('button')
    fireEvent.click(dropdownSelectedField)

    const dropdownList = screen.getByTestId('dropdownList')
	expect(dropdownList).toBeInTheDocument()
})

test('after click on Dropdown, dropdownList should be rendered; after click on dropdownItem in list, Dropdown should get selected value', () => {
    render(<Dropdown />)

	const dropdownSelectedField = screen.getByRole('button')
    fireEvent.click(dropdownSelectedField)	

    const dropdownList = screen.getByTestId('dropdownList')
	const dropdownItem = within(dropdownList).getByText(/day/i)
	fireEvent.click(dropdownItem)
	
    expect(dropdownSelectedField).toHaveTextContent(/day/i)
})