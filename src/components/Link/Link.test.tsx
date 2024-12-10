import { render, screen } from '@testing-library/react';
import Link from './index.tsx';
import 'jest-styled-components';

test('component Link should be rendered', () => {
	render(<Link disabled={false} />)

	const link = screen.getByRole('link')
	expect(link).toBeInTheDocument()
})

test('Link should be disabled', () => {
	render(<Link disabled={true} />)
	const linkParent = screen.getByTestId('button-as-link')

	expect(linkParent).toBeDisabled()
})

test('Link should be enabled', () => {
	render(<Link disabled={false} />)
	const linkParent = screen.getByTestId('button-as-link')

	expect(linkParent).toBeEnabled()
})