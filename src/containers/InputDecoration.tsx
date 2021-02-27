import { CSSProperties, MouseEvent } from "react";
import styled from "styled-components";

const InputDecorationStyle = styled.div`
  position: absolute;
  height: 45px;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    z-index: 3;
    cursor: pointer;
    font-size: 0.8rem;
    margin-right: 1rem;
  }
`;
type Props = {
  className: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  style?: CSSProperties;
};
const InputDecoration = ({ className, onClick, style }: Props) => {
  return (
    <InputDecorationStyle style={style}>
      <i className={className} onClick={onClick}></i>
    </InputDecorationStyle>
  );
};
export default InputDecoration;
