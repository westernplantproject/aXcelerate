import styled from 'styled-components';

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
`;

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1rem;
  color: #888;
`;

export const SearchInput = styled.input`
  width: 90%;
  padding: 10px 10px 10px 36px; 
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;

  &::placeholder {
    color: #aaa;
  }
`;