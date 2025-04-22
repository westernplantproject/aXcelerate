import React from "react";
import { SearchWrapper, SearchInput, Icon } from "./ContactSearch.styled";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const ContactSearch: React.FC<Props> = ({ value, onChange }) => {
  return (
    <SearchWrapper>
      <Icon>🔍</Icon>
      <SearchInput type="text" placeholder="Search contacts..." value={value} onChange={(e) => onChange(e.target.value)} />
    </SearchWrapper>
  );
};

export default ContactSearch;
