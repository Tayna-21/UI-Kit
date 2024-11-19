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
        label: 'Description',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
	}
}