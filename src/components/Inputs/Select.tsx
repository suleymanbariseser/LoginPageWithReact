import { useState } from "react";
import InputDecoration from "../../containers/InputDecoration";
import InputWrapper from "../../containers/InputWrapper";
type Option = {
  label: string;
  value: string;
};
type Props = {
  name: string;
  reference: any;
  error?: any;
  invalidMessage?: string;
  options: Option[];
  placeholder: string;
  underline?: string;
};

const Select = ({
  name,
  placeholder,
  reference,
  error,
  invalidMessage,
  options,
  underline,
}: Props) => {
  const [show, setShow] = useState(false);

  return (
    <InputWrapper
      name={name}
      error={error}
      invalidMessage={invalidMessage}
      underline={underline}
    >
      <InputDecoration
        className={show ? "fas fa-chevron-up" : "fas fa-chevron-down"}
        style={{ zIndex: 1 }}
      />
      <select
        name={name}
        ref={reference}
        onClick={() => setShow(!show)}
        defaultValue=""
        required
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map(({ value, label }, index) => (
          <option key={`${index}`} value={value}>
            {label}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
};

export default Select;
