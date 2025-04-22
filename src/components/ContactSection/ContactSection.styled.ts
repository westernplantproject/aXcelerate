import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const SectionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px 0;
`;

export const SectionTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: #374151;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: #6b7280;
  padding: 4px;
`;
