import { FunctionComponent } from "react";
import styled from "styled-components";

type Props = {
  label?: string;
  error?: any;
  invalidMessage?: string;
  name: string;
  underline?: string;
};

type StyleProps = {
  isValid?: boolean;
};
const invalidColor = `rgba(245, 60, 60, .8)`;
const InputWrapperStyle = styled.div<StyleProps>`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  margin-top: 1rem;
  label {
    position: absolute;
    top: 0;
    color: rgba(0, 0, 0, 0.5);
    margin-left: 0.8rem;
    transform: translateY(calc(100% - 2px));
    z-index: 1;
    background-color: #f9f9f9;
    transition: 0.4s;
    align-self: flex-start;
  }
  .underline {
    margin-top: 0.2rem;
    color: rgba(0, 0, 0, 0.5);
  }
  input,
  select {
    height: 45px;
    z-index: 2;
    padding: 0.5rem 0.8rem;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.7);
    outline: none;
    background-color: transparent;
    &:focus + label,
    &:valid + label {
      font-size: 10px;
      transform: translateY(-50%);
      z-index: 3;
    }
  }
  select {
    appearance: none;
  }
  .alert {
    margin-top: 0.5rem;
    color: ${invalidColor};
  }
  ${({ isValid }) =>
    isValid &&
    `
    label {
      color: ${invalidColor};
    }
    input, select {
      border: 1px solid ${invalidColor};
    }
  `}
`;

const InputWrapper: FunctionComponent<Props> = ({
  name,
  label,
  error,
  invalidMessage,
  children,
  underline,
}) => {
  return (
    <InputWrapperStyle isValid={!!error}>
      {error && <div className="alert">{invalidMessage || error.message}</div>}
      {underline && <div className="underline">{underline}</div>}
      {children}
      {<label htmlFor={name}>{label}</label>}
    </InputWrapperStyle>
  );
};

export default InputWrapper;
