import { render, screen, fireEvent } from '@testing-library/react';
import Textarea from './index.tsx';

test('component Textarea should be rendered', () => {
	render(<Textarea label={'description'} />)
	const textarea = screen.getByLabelText('description')

	expect(textarea).toBeInTheDocument()
})