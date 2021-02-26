import Form from "../../components/Form";
import Input from "../../components/Inputs/Input";
import Select from "../../components/Inputs/Select";
import Col from "../../containers/Col";
import Container from "../../containers/Container";
import Row from "../../containers/Row";
import { LoginWrapper, LoginInnerWrapper } from "./LoginStyle";
import useForm from "../../hooks/useForm"; // custom hook
import { emailRegex, passwordRegex } from "../../constants/formRegexes";

const Login = () => {
  const { errors, register, handleSubmit } = useForm(); // We will use useRef to avoid slowness of react useState
  const onSubmit = (data: any) => {
    // if submit is successful
    alert("Registeration is successful");
    console.table(data);
  };
  return (
    <LoginWrapper>
      <LoginInnerWrapper>
        <Row>
          <Col flexSize="8" type="primary" className="col">
            <Container size="md">
              <h1>Let's set up your account</h1>
              <p className="margin-both">
                Already have an account?{" "}
                <a
                  href="#first-container"
                  onClick={() => alert("Direct to Sign-In Page")}
                >
                  Sign in
                </a>
              </p>
              <Form
                onSubmit={(e) => {
                  handleSubmit(e, onSubmit);
                }}
                buttonValue="Next"
                valid={errors && Object.keys(errors).length === 0}
              >
                {console.log(errors)}
                <Input
                  type="text"
                  label="Your name"
                  name="name"
                  reference={register({ required: true })}
                  error={errors?.name}
                  invalidMessage={"Please enter a name"}
                />
                <Input
                  type="text"
                  label="Email address"
                  name="email"
                  reference={register({ required: true, pattern: emailRegex })}
                  error={errors?.email}
                  invalidMessage={"Please enter a valid email address"}
                />
                <Select
                  name="job"
                  reference={register({ required: true })}
                  options={[
                    { value: "Developer", label: "Developer" },
                    { label: "Teacher", value: "Teacher" },
                    { label: "Lawyer", value: "Lawyer" },
                    { label: "Artist", value: "Artist" },
                    { label: "Accountant", value: "Accountant" },
                    { label: "Taxi driver", value: "Driver" },
                  ]}
                  error={errors?.job}
                  placeholder="I would describe my user type as"
                  invalidMessage={"Please select a job"}
                />
                <Input
                  type="password"
                  label="Password"
                  name="password"
                  reference={register({
                    required: true,
                    pattern: passwordRegex,
                  })}
                  underline="Minimum 8 characters"
                  error={errors?.password}
                  invalidMessage={"Please enter a valid password"}
                />
              </Form>
              <p className="soft">
                By clicking the "Next" button, you agree to creating a free
                account, and to{" "}
                <a href="#hello" onClick={() => alert("Show Terms of Service")}>
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#hello" onClick={() => alert("Show Privacy Policy")}>
                  Privacy Policy.
                </a>
              </p>
            </Container>
          </Col>
          <Col flexSize="4" type="secondary" className="col is-hidden-touch">
            <Container id="second-container" size="sm">
              <h1 className="centered">Dummy Heading</h1>
              <p className="spaced">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Container>
          </Col>
        </Row>
      </LoginInnerWrapper>
    </LoginWrapper>
  );
};
export default Login;
