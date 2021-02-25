import styled from "styled-components";

type Props = {
  flexSize:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  type?: "primary" | "secondary";
};
const Col = styled.div<Props>`
  flex: 0 0 ${({ flexSize }) => `${100 / (12 / +flexSize)}%`};
  padding: 0.75rem;
  ${({ type }) =>
    type === "secondary"
      ? `
    color: white;
    background-color: #286EFA;
  `
      : `
    color: black;
    background-color: #F9F9F9;
  `};
`;
export default Col;
