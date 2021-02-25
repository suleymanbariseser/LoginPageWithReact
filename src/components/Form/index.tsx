import { FunctionComponent } from "react";
import { FormWrapper } from "./FormStyle";

type Props = {
  onSubmit: (event: React.FormEvent) => void;
  buttonValue: string;
};
const Form: FunctionComponent<Props> = ({
  children,
  onSubmit,
  buttonValue,
}) => {
  return (
    <FormWrapper onSubmit={onSubmit} noValidate>
      {children}
      <button type="submit">{buttonValue}</button>
    </FormWrapper>
  );
};
export default Form;
