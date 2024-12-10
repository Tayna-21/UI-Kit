import DatePicker from './index.tsx';
import { Meta, StoryObj } from '@storybook/react'; 
import './datepicker.module.css';

const meta: Meta<typeof DatePicker> = {
	title: 'DatePicker',
	component: DatePicker,
	parameters: {
	    layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {};