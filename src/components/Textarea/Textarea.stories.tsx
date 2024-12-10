import Textarea from './index.tsx';
import { Meta, StoryObj } from '@storybook/react'; 
import './textarea.module.css';

const meta: Meta<typeof Textarea> = {
	title: 'Textarea',
	component: Textarea,
	parameters: {
        layout: 'centered'
	},
	tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
	args: {
        label: 'Description'
	}
}