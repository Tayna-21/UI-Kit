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
			options: ['default', 'disabled', 'hover', 'active']
		}
	}
}

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
    args: {
		state: 'default'
	}
}