import GroupeOfIcons from './index.tsx';
import { Meta, StoryObj } from '@storybook/react'; 
import './icons.module.css';

const meta: Meta<typeof GroupeOfIcons> = {
	title: 'GroupeOfIcons',
	component: GroupeOfIcons,
	parameters: {
	    layout: 'centered'
	}
}

export default meta;
type Story = StoryObj<typeof GroupeOfIcons>;

export const Default: Story = {};