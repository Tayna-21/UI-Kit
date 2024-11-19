import Button from './index.tsx';
import { Meta, StoryObj } from '@storybook/react'; 
import './styles.ts';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	parameters: {
	    layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		state: {
			control: {
				type: 'radio',
			},
			options: ['default', 'disabled', 'hover', 'active']
		}
	}
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		primary: true,
		icon: false,
		state: 'default'
	}
}

export const PrimaryWithIcon: Story = {
	args: {
		primary: true,
		icon: true,
		state: 'default'
	}
}

export const Secondary: Story = {
	args: {
        state: 'default'
	}
}

export const SecondaryWithIcon: Story = {
	args: {
        icon: true,
		state: 'default'
	}
}