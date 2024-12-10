import Link from './index.tsx';
import { Meta, StoryObj } from '@storybook/react'; 
import './styles.ts';

const meta: Meta<typeof Link> = {
    title: 'Link',
	component: Link,
	parameters: {
        layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		state: {
			control: {
				type: 'radio'
			},
			options: ['hover', 'active']
		}
	}
}

export default meta;
type Story = StoryObj<typeof Link>;

export const LinkDefault: Story = {
    args: {
		disabled: false
	}
}

export const LinkDisabled: Story = {
    args: {
		disabled: true,
	}
}

export const LinkHover: Story = {
    args: {
		disabled: false,
		state: 'hover'
	}
}

export const LinkPressed: Story = {
    args: {
		disabled: false,
		state: 'active'
	}
}