import { Header } from "../../components/Header";
import { Button } from "../../styles/Button";
import { Input } from "../../styles/Input";
import { ContentInput, Form, Links, LoginContainer } from "../../pages/Login/styled";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

import logo from "../../assets/images/LogoCarro.jpg";

export const Login = () => {
  const { formData, isLoggingIn, error, handleInputChange, handleLogin } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div>
      <Header logo={logo} title="Login" />
      <LoginContainer>
        <ContentInput>
          <Form onSubmit={handleSubmit}>
            <div>
              <label>E-mail</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isLoggingIn}
              />
            </div>

            <div>
              <label>Senha</label>
              <Input
                type="password"
                name="pass"
                value={formData.pass}
                onChange={handleInputChange}
                disabled={isLoggingIn}
              />
            </div>

            {error && <p className="error" >{error}</p>}

            <Button type="submit" className="login-button" disabled={isLoggingIn}>
              {isLoggingIn ? "Entrando..." : "Entrar"}
            </Button>
          </Form>
        </ContentInput>

        <Links>
          <a href="#">Esqueceu a senha?</a> <br />
          <span>Não possui um cadastro?</span>
          <Link to="/register">Cadastre-se</Link>
        </Links>
      </LoginContainer>
    </div>
  );
};
