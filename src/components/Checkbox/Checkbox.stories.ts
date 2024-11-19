import Checkbox from './index.tsx';
import { Meta, StoryObj } from '@storybook/react';
import './styles.ts';

const meta: Meta<typeof Checkbox> = {
    title: 'Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		checked: {
			control: {
				type: 'radio'
			},
			options: [false, true]
		},
		label: {
			control: {
				type: 'text'
			},
			options: ['Text', null]
		}
	}
}

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	args: {
		label: 'Text',
		checked: false
	}
};