import { FunctionComponent } from "react";
import { FormWrapper } from "./FormStyle";

type Props = {
  onSubmit: (event: React.FormEvent) => void;
  buttonValue: string;
  valid: boolean;
};
const Form: FunctionComponent<Props> = ({
  children,
  onSubmit,
  buttonValue,
  valid,
}) => {
  return (
    <FormWrapper onSubmit={onSubmit} noValidate>
      {children}
      <button type="submit" className={valid ? "valid" : ""}>
        {buttonValue}
      </button>
    </FormWrapper>
  );
};
export default Form;
