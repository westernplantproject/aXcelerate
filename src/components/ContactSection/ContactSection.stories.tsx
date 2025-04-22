import type { Meta, StoryObj } from '@storybook/react';
import ContactSection from './ContactSection';

const meta: Meta<typeof ContactSection> = {
    title: 'Components/ContactSection',
    component: ContactSection,
}

export default meta;

type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {
    args: {
        title: "Contact List",
        contacts: [
            { 
            name: "John Doe",
            email: "john@gmail.com",
            avatarUrl: 'https://i.pravatar.cc/150?img=4',
            }
        ]
    }
}