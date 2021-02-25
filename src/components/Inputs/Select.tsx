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
  return (
    <InputWrapper
      name={name}
      error={error}
      invalidMessage={invalidMessage}
      underline={underline}
    >
      <select name={name} ref={reference} defaultValue="" required>
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
