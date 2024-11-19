import Toast from './index.tsx';
import  { Meta, StoryObj } from '@storybook/react';
import './toast.module.css';

const meta: Meta<typeof Toast> = {
    title: 'Toast',
    component: Toast,
    parameters: {
	    layout: 'centered'
    },
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
    args: {
		text: 'Event deleted',
        time: 5990
	}
}