import { render, screen, within } from '@testing-library/react';
import Input from './index.tsx';
import 'jest-styled-components';

test('component Input should be rendered', () => {
	render(<Input type={'text'} id={'username'} placeholder={'enter your name'} label={'username'} disabled={false} isInvalid={false} />)

	const input = screen.getByLabelText(/username/i)
	expect(input).toBeInTheDocument()
})

test('component Input should have/loose focus', () => {
	render(<Input type={'text'} id={'username'} placeholder={'enter your name'} label={'username'} disabled={false} isInvalid={false} />)

	const input = screen.getByLabelText(/username/i)
	input.focus()

    expect(input).toHaveFocus()

	input.blur()
	expect(input).not.toHaveFocus()
})

test('Input should be disabled', () => {
	render(<Input type={'text'} id={'username'} placeholder={'enter your name'} label={'username'} disabled={true} isInvalid={false} />)
	const input = screen.getByLabelText(/username/i)

	expect(input).toBeDisabled()
})

test('if Input is invalid, error message should be rendered', () => {
	render(<Input type={'text'} id={'username'} placeholder={'enter your name'} label={'username'} disabled={false} isInvalid={true} />)
	const input = screen.getByLabelText(/username/i)
	const errorMessage = screen.getByText(/error message/i)

	expect(input).toHaveAttribute('aria-invalid')
	expect(errorMessage).toBeInTheDocument()
})

test('Input with type "password" should be rendered with icon(eye)', () => {
	render(<Input type={'password'} id={'password'} placeholder={'enter your password'} label={'password'} disabled={false} isInvalid={false} />)
	const input = screen.getByLabelText(/password/i)
	const icon = screen.getByRole('icon')

	expect(input).toBeInTheDocument()
	expect(icon).toBeInTheDocument()
})