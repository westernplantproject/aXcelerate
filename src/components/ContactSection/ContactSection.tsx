import React from "react";
import { useState } from "react";
import { SectionContainer, SectionTitle, SectionTitleWrapper, ToggleButton } from "./ContactSection.styled";
import ContactListItem from "../ContactListItem/ContactListItem";

type Props = {
  title: string;
  contacts: {
    name: string;
    email: string;
    avatarUrl: string;
  }[];
};

const ContactSection: React.FC<Props> = ({ title, contacts }) => {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <SectionContainer>
      <SectionTitleWrapper onClick={handleClick}>
        <SectionTitle>{title}</SectionTitle>
        <ToggleButton>{isOpen ? "▼" : "▶"}</ToggleButton>
      </SectionTitleWrapper>
      {isOpen &&
        contacts.map((contact, index) => <ContactListItem key={index} name={contact.name} email={contact.email} avatarUrl={contact.avatarUrl} />)}
    </SectionContainer>
  );
};

export default ContactSection;
