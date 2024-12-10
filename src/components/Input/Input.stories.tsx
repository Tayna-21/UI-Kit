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
		type: {
			control: {
                type: 'radio'
			},
			options: ['text', 'password']
		},
        state: {
            control: {
				type: 'radio'
			},
			options: ['filled', 'active']
		}
	}
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputTexDefault: Story = {
	args: {
		id: "user",
		type: "text",
		label: "username",
		placeholder: "Enter your username",
	}
};

export const InputTexFilled: Story = {
	args: {
		id: "user",
		type: "text",
		label: "username",
		placeholder: "Enter your username",
		value: 'Some user\'s information',
		state: 'filled'
	}
};

export const InputTexActive: Story = {
	args: {
		id: "user",
		type: "text",
		label: "username",
		placeholder: "Enter your username",
		value: 'Some user\'s information',
		state: 'active'
	}
};

export const InputTexDisabled: Story = {
	args: {
		id: "user",
		type: "text",
		label: "username",
		placeholder: "Enter your username",
		value: 'Some user\'s information',
		disabled: true
	}
};

export const InputTexInvalid: Story = {
	args: {
		id: "user",
		type: "text",
		label: "username",
		placeholder: "Enter your username",
		value: 'Some user\'s information',
		isInvalid: true
	}
};

export const InputPasswordDefault: Story = {
	args: {
		id: "password",
		type: "password",
		label: "password",
		placeholder: "Enter your password",
	}
};

export const InputPasswordFilled: Story = {
	args: {
		id: "password",
		type: "password",
		label: "password",
		placeholder: "Enter your password",
		value: '12345',
		state: 'filled'
	}
};

export const InputPasswordActive: Story = {
	args: {
		id: "password",
		type: "password",
		label: "password",
		placeholder: "Enter your password",
		value: '12345',
		state: 'active'
	}
};

export const InputPasswordDisabled: Story = {
	args: {
		id: "password",
		type: "password",
		label: "password",
		placeholder: "Enter your password",
		value: '12345',
		disabled: true
	}
};

export const InputPasswordInvalid: Story = {
	args: {
		id: "password",
		type: "password",
		label: "password",
		placeholder: "Enter your password",
		value: '12345',
		isInvalid: true
	}
}
