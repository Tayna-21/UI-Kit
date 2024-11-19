import Input from './index.tsx';
import { Meta, StoryObj } from '@storybook/react'; 
import './styles.ts';

const meta: Meta<typeof Input> = {
    title: 'Input',
	component: Input,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
        state: {
            control: {
				type: 'radio'
			},
			options: ['default', 'filled', 'active', 'disabled', 'error']
		}
	}
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputText: Story = {
	args: {
		id: "1",
		type: "text",
		label: "Username",
		placeholder: "Enter your username",
		state: 'default',
		value: 'Some user\'s information',
	}
};

export const InputPassword: Story = {
	args: {
		id: "2",
		type: "password",
		label: "Password",
		placeholder: "Enter your password",
		state: 'default',
		value: '12345'
	}
}