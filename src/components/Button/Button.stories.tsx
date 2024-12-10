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
		variant: {
            control: {
				type: 'radio',
			},
			options: ['primary', 'secondary']
		},
		state: {
			control: {
				type: 'radio',
			},
			options: ['default', 'hover', 'active']
		}
	}
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		isIcon: false,
		value: 'button',
		disabled: false
	}
}

export const PrimaryWithIcon: Story = {
	args: {
		variant: 'primary',
		isIcon: true,
		value: 'button',
		disabled: false
	}
}

export const Secondary: Story = {
	args: {
        variant: 'secondary',
		isIcon: false,
		value: 'button',
		disabled: false
	}
}

export const SecondaryWithIcon: Story = {
	args: {
		variant: 'secondary',
        isIcon: true,
		value: 'button',
		disabled: false
	}
}