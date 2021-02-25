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
  return (
    <InputWrapper
      name={name}
      label={label}
      error={error}
      invalidMessage={invalidMessage}
      underline={underline}
    >
      <input name={name} ref={reference} type={type} required />
    </InputWrapper>
  );
};

export default Input;
