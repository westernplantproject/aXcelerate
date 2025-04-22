import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import ContactSearch from './ContactSearch';

const meta: Meta<typeof ContactSearch> = {
  title: 'Components/ContactSearch',
  component: ContactSearch,
};

export default meta;

type Story = StoryObj<typeof ContactSearch>;

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <ContactSearch
        value={value}
        onChange={(newValue) => {
          console.log('User typed:', newValue);
          setValue(newValue);
        }}
      />
    );
  },
};
