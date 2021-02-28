import styled from "styled-components";

const StyledTh = styled.th`
  background: #ececec;
  padding: 8px;
  font-size: 12px;
  color: #000;
  border: ${({ theme }) => `3px solid ${theme.colors.text}`};

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export default StyledTh;
