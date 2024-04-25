import { Header } from "../../components/Header";
import { Button } from "../../styles/Button";
import { Input } from "../../styles/Input";
import { ContendInput, InputContainer, LoginContainer } from "../../pages/Login/styled";
import  logo  from "../../assets/images/LogoCarro.jpg";

import "./style.css";

export const Login = () => {
  return (
    <div>
      <Header logo={logo} title="Login"/>
      <LoginContainer>
        <ContendInput>
          <InputContainer>
            <label>E-mail</label>
            <Input type="email" id="email" />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <Input type="password" id="password" />
          </InputContainer>

          <Button className="login-button">Entrar</Button>
        </ContendInput>

        <div className="links">
          <a href="#" id="forgot-password">
            Esqueceu a senha?
          </a>
          <a href="./frontend/src/pages/Register" onClick="navigate('Register')">
            Cadastrar
          </a>
          <div className="overlay" id="overlay">
            <div className="alert" id="alert">
              <span id="alert-text"></span>
              <span className="button-close">X</span>
            </div>
          </div>
        </div>
      </LoginContainer>
    </div>
  );
}
