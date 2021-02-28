import styled from "styled-components";

export const Handle = styled.div<{ checked: boolean | undefined }>`
  background-color: ${({ theme, checked }) => (checked ? theme.colors.background : theme.toggle.handleBackground)};
  border-radius: 2px;

  cursor: pointer;
  height: 30px;
  position: absolute;
  top: 2px;
  left: 4px;
  transition: left 200ms ease-in;
  width: 30px;
  z-index: 1;
  border: ${({ theme }) => `3px solid ${theme.colors.text}`};
`;

export const Input = styled.input`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: calc(100% - 36px);
  }

  &:focus + ${Handle} {
    box-shadow: "none";
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: "none";
  }
`;

const StyledToggle = styled.div<{ checked: boolean }>`
  border: ${({ theme }) => `3px solid ${theme.colors.text}`};
  align-items: center;
  background-color: ${({ theme, checked }) => theme.colors[checked ? "success" : "input"]};
  border-radius: 2px;
  box-shadow: "none";
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  position: relative;
  transition: background-color 200ms;
  width: 72px;
`;

export default StyledToggle;
