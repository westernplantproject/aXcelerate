import React, { useState } from "react";
import ContactSection from "../ContactSection/ContactSection";
import ContactSearch from "../ContactSearch/ContactSearch";
import { ContactListWrapper, SectionWrapper } from "./ContactList.styled";

type Contact = {
  name: string;
  email: string;
  avatarUrl: string;
  status: "Attended" | "Absent";
};

type Props = {
  contacts: Contact[];
};

const ContactList: React.FC<Props> = ({ contacts }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contacts.filter((c) => `${c.name} ${c.email}`.toLowerCase().includes(searchQuery.toLowerCase()));

  const grouped = {
    Attended: filteredContacts.filter((c) => c.status === "Attended"),
    Absent: filteredContacts.filter((c) => c.status === "Absent"),
  };

  return (
    <ContactListWrapper>
      <SectionWrapper>
        <ContactSearch value={searchQuery} onChange={setSearchQuery} />
        {filteredContacts.length === 0 ? (
          <p>No contacts found.</p>
        ) : (
          <>
            <ContactSection title="Attended" contacts={grouped.Attended} />
            <ContactSection title="Absent" contacts={grouped.Absent} />
          </>
        )}
      </SectionWrapper>
    </ContactListWrapper>
  );
};

export default ContactList;
