import React from 'react';
import { Container, Avatar, Info, Name, Email } from './ContactListItem.styled';

type Props = {
    name: string;
    email: string;
    avatarUrl: string;
}

const ContactListItem: React.FC<Props> = ({ name, email, avatarUrl}) => {
    return(
        <Container>
            <Avatar src={avatarUrl} alt={name}/>
            <Info>
                <Name>{name}</Name>
                <Email>{email}</Email>
            </Info>
        </Container>
    )
}

export default ContactListItem;