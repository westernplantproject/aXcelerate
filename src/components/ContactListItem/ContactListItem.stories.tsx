import type { Meta, StoryObj } from '@storybook/react';
import ContactListItem from './ContactListItem';

const meta: Meta<typeof ContactListItem> = {
    title: 'Components/ContactListItem',
    component: ContactListItem,
}

export default meta;

type Story = StoryObj<typeof ContactListItem>;

export const Default: Story = {
    args: {
        name: 'Jane Doe',
        email: 'jane@hotmail.com',
        avatarUrl: 'https://i.pravatar.cc/150?img=3',
    }
}