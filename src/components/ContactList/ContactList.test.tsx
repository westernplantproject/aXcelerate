import { render, screen, fireEvent } from '@testing-library/react';
import ContactList from './ContactList';

type Contact = {
  name: string;
  email: string;
  avatarUrl: string;
  status: 'Attended' | 'Absent';
};

describe('ContactList', () => {
    const contacts: Contact[] = [
    { name: 'Jane', email: 'jane@example.com', avatarUrl: 'https://i.pravatar.cc/150?img=1', status: 'Attended' },
    { name: 'John', email: 'john@example.com', avatarUrl: 'https://i.pravatar.cc/150?img=2', status: 'Absent' },
    ];

  it('renders contact names', () => {
    render(<ContactList contacts={contacts} />);
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
  });

  it('filters contacts by search input', () => {
    render(<ContactList contacts={contacts} />);
    const input = screen.getByPlaceholderText('Search contacts...') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Jane' } });

    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.queryByText('John')).not.toBeInTheDocument();
  });
});
