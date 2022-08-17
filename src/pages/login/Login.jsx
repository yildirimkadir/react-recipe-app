import LoginStyle, {
  FormContainer,
  LoginContainer,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledButton,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userInfo = {
    name: userName,
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("currentUser", JSON.stringify(userInfo));
    navigate(-1);
    setUserName("");
    setPassword("");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="username"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <StyledInput
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
