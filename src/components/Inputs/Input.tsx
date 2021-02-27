import { useState } from "react";
import InputDecoration from "../../containers/InputDecoration";
import InputWrapper from "../../containers/InputWrapper";

type Props = {
  label: string;
  name: string;
  reference: any;
  type: "text" | "password" | "email";
  error?: any;
  invalidMessage?: string;
  underline?: string;
};
const Input = ({
  label,
  name,
  reference,
  type,
  error,
  invalidMessage,
  underline,
}: Props) => {
  const [show, setShow] = useState(false);
  return (
    <InputWrapper
      name={name}
      label={label}
      error={error}
      invalidMessage={invalidMessage}
      underline={underline}
    >
      {type === "password" && (
        <InputDecoration
          className={show ? "fas fa-eye-slash" : "fas fa-eye"}
          onClick={() => setShow(!show)}
        />
      )}
      <input
        name={name}
        ref={reference}
        type={type === "password" ? (show ? "password" : "text") : type}
        required
      />
    </InputWrapper>
  );
};

export default Input;
