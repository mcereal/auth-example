import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import GoogleButton from "react-google-button";
import API from "../utils/API";

const handleFormSubmit = async () => {
  console.log("Google button clicked");
  try {
    const userInfo = await API.login();
    console.log("USERINFO", userInfo);
  } catch (error) {
    console.log(error);
  }
};

export default function Login() {
  return (
    <div>
      <Form className="login-form">
        <h1 className="text-center">
          <span className="font-weight-bold">Login Form</span>
        </h1>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <Button className="btn-lg btn-block">Log in</Button>
        <div className="text-center pt-3">Or</div>
        <GoogleButton
          label="Login with Google"
          type="light"
          onClick={handleFormSubmit}
        />
        <div className="text-center">
          <a href="/sign-up">Sign up</a>
        </div>
      </Form>
    </div>
  );
}
