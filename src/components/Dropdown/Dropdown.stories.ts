import Dropdown from './index.tsx';
import { Meta, StoryObj } from '@storybook/react'; 
import './dropdown.module.css';

const meta: Meta<typeof Dropdown> = {
	title: 'Dropdown',
	component: Dropdown,
	parameters: {
	    layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
	args: {
		list: ['day', 'week']
	}
}