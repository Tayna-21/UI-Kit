import CustomSelect from './index.tsx';
import { Meta, StoryObj } from '@storybook/react'; 
import './select.module.css';

const meta: Meta<typeof CustomSelect> = {
	title: 'Select',
	component: CustomSelect,
	parameters: {
        layout: 'centered'
	},
	tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof CustomSelect>;

export const Default: Story = {
	args: {
		label: 'Time',
		placeholder: 'select time',
	}   
}