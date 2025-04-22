import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: #f9fafb;
  transition: background-color 0.2s ease;

  &:hover {
    background-color:rgb(245, 231, 246);
  }
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
  color: #111827;
`;

export const Email = styled.div`
  font-size: 0.85rem;
  color: #6b7280;
`;
