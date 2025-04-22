import type { Meta, StoryObj } from "@storybook/react";
import ContactList from "./ContactList";

const meta: Meta<typeof ContactList> = {
  title: "Components/ContactList",
  component: ContactList,
};

export default meta;

type Story = StoryObj<typeof ContactList>;

export const Default: Story = {
  args: {
    contacts: [
      {
        name: "Jane Doe",
        email: "jane@example.com",
        avatarUrl: "https://i.pravatar.cc/150?img=1",
        status: "Attended",
      },
      {
        name: "Hannah Jones",
        email: "Hannah@example.com",
        avatarUrl: "https://i.pravatar.cc/150?img=2",
        status: "Attended",
      },
      {
        name: "Rudolf Fenwick",
        email: "rud@gmail.com",
        avatarUrl: "https://i.pravatar.cc/150?img=5",
        status: "Attended",
      },
      {
        name: "Barry Brown",
        email: "brown@hotmail.com",
        avatarUrl: "https://i.pravatar.cc/150?img=7",
        status: "Attended",
      },
      {
        name: "John Smith",
        email: "john@example.com",
        avatarUrl: "https://i.pravatar.cc/150?img=2",
        status: "Absent",
      },
      {
        name: "Riley Runner",
        email: "Runner@example.com",
        avatarUrl: "https://i.pravatar.cc/150?img=4",
        status: "Absent",
      },
      {
        name: "Alice Illheimer",
        email: "alice@hotmail.com",
        avatarUrl: "https://i.pravatar.cc/150?img=6",
        status: "Absent",
      },
    ],
  },
};
