import styled from "styled-components";

type Props = {
  size: "sm" | "md" | "lg";
};
const sizeWidth = { sm: "300px", md: "400px", lg: "600px" };
const Container = styled.div<Props>`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${({ size }) => size && `max-width: ${sizeWidth[size]};`}
`;
export default Container;
