import Modal from './index.tsx';
import { Meta, StoryObj } from '@storybook/react'; 
import './modal.module.css';

const meta: Meta<typeof Modal> = {
	title: 'Modal',
	component: Modal,
	parameters: {
        layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
	args: {
        title: 'Title',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
	}
}