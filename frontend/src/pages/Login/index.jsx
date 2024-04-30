import { Header } from "../../components/Header";
import { Button } from "../../styles/Button";
import { Input } from "../../styles/Input";
import { ContentInput, Form, Links } from "../../pages/Login/styled";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

import logo from "../../assets/images/LogoCarro.jpg";

export const Login = () => {
  const { formData, isLoggingIn, error, handleInputChange, handleLogin } =
    useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div>
      <Header logo={logo} title="Login" />
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

          {error && <p className="error">{error}</p>}

          <Button type="submit" className="login-button" disabled={isLoggingIn}>
            {isLoggingIn ? "Entrando..." : "Entrar"}
          </Button>
        </Form>
        <Links>
          <span>Esqueceu a senha?</span>
          <span>
            Não possui um cadastro? <br /> <Link to="/register">Cadastre-se</Link>{" "}
          </span>
        </Links>
      </ContentInput>
    </div>
  );
};
