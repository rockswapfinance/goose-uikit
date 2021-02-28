import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardFooterProps = SpaceProps;

const CardFooter = styled.div<CardFooterProps>`
  border-top: ${({ theme }) => `3px solid ${theme.colors.borderColor}`};
  ${space}
`;

CardFooter.defaultProps = {
  p: "24px",
};

export default CardFooter;
