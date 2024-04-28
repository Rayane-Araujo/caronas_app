import { Header } from "../../components/Header";
import { Button } from "../../styles/Button";
import { Input } from "../../styles/Input";
import { ContentInput, Form, Links, LoginContainer } from "../../pages/Login/styled";
import { Link } from "react-router-dom";

import logo from "../../assets/images/LogoCarro.jpg";

export const Login = () => {
  return (
    <div>
      <Header logo={logo} title="Login" />
      <LoginContainer>
        <ContentInput>
          <Form>
            <div>
              <label>E-mail</label>
              <Input type="email" />
            </div>

            <div>
              <label>Senha</label>
              <Input type="password" />
            </div>

            <Button className="login-button">Entrar</Button>
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
