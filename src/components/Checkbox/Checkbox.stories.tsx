import Checkbox from './index.tsx';
import { Meta, StoryObj } from '@storybook/react';
import './styles.ts';
import { fn } from '@storybook/test';

const meta: Meta<typeof Checkbox> = {
    title: 'Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		isChecked: {
			control: {
				type: 'radio',
			},
			options: []
		},
		isLabel: {
			control: {
				type: 'radio'
			},
			options: [false, true]
		}
	}
}

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const DefaultChecked: Story = {
	args: {
		isLabel: false,
		value: 'text',
		isChecked: true
	}
};

export const DefaultUnchecked: Story = {
	args: {
		isLabel: false,
		value: 'text',
		isChecked: false
	}
};

export const WithLabelChecked: Story = {
	args: {
		isLabel: true,
		value: 'text',
		isChecked: true
	}
};

export const WithLabelUnchecked: Story = {
	args: {
		isLabel: true,
		value: 'text',
		isChecked: false
	}
};