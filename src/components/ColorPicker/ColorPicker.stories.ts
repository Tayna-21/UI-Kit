import ColorPicker from './index.tsx';
import { Meta, StoryObj } from '@storybook/react'; 
import './colorPicker.module.css';

const meta: Meta<typeof ColorPicker> = {
	title: 'ColorPicker',
	component: ColorPicker,
	parameters: {
	    layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {};