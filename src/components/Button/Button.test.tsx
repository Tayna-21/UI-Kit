import { fireEvent, render, screen } from '@testing-library/react';
import Button from './index.tsx';
import 'jest-styled-components';

    test('component Button should be rendered', () => {
	    render(<Button variant={'primary'} isIcon={false} value="Button" disabled={false} onClick={() => {}} />);
	    const button = screen.getByRole('button');

	    expect(button).toBeInTheDocument();
    })

	test('after click on Button, function should be executed', () => {
		const handleClick = jest.fn();

		render(<Button variant={'secondary'} isIcon={false} value="Button" disabled={false} onClick={handleClick} />);
		const button = screen.getByRole('button');

		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalled();
	})

	test('Button\'s styles should change when hover', () => {
		render(<Button variant={'secondary'} isIcon={false} state='hover' value="Button" disabled={false} onClick={() => {}} />);
		const button = screen.getByRole('button');

		fireEvent.mouseOver(button)
		expect(button).toHaveStyleRule('background-color', '#efefef', {
			modifier: ':hover',
		});
	})

	test('Button\'s styles should change after Button was pressed', () => {
		render(<Button variant={'secondary'} isIcon={false} state='active' value="Button" disabled={false} onClick={() => {}} />);
		const button = screen.getByRole('button');

		fireEvent.mouseDown(button)
        expect(button).toHaveStyleRule('background-color', '#e0e0e0', {
			modifier: ':active'
		})
	})

	test('Button should be disabled', () => {
		render(<Button variant={'secondary'} isIcon={false} state='active' value="Button" disabled={true} onClick={() => {}} />);
		const button = screen.getByRole('button');

        expect(button).toHaveAttribute('disabled')
	})