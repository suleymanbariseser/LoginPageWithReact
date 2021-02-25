import styled from "styled-components";

const FormWrapper = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  button {
    margin-top: 1rem;
    padding: 0.8rem;
    border-radius: 3px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 10px;
    font-weight: 600;
    background-color: #ededed;
    border: none;
  }
`;
export { FormWrapper };
