import { Header } from "../../components/Header";
import { Button } from "../../styles/Button";
import { Input } from "../../styles/Input";
import { ContentInput, InputContainer, Links } from "../../pages/Login/styled";
import { Link } from "react-router-dom";

import logo from "../../assets/images/LogoFoto.jpg";

export const Register = () => {
  return (
    <>
      <Header logo={logo} title="Cadastro" />
      <ContentInput>
        <InputContainer>
          <div>
            <label>Nome</label>
            <Input type="name" />
          </div>

          <div>
            <label>Email</label>
            <Input type="email" />
          </div>

          <div>
            <label>Telefone</label>
            <Input type="telefone" />
          </div>

          <div>
            <label>Veículo</label>
            <Input type="veiculo" />
          </div>

          <div>
            <label>Senha</label>
            <Input type="password" />
          </div>

          <div>
            <label>Confirmar senha</label>
            <Input type="password" />
          </div>
        </InputContainer>

        <Button>Cadastrar</Button>

        <Links>
          <span>Já é cadastrado?</span>
          <Link to="/login">Faça login</Link>
        </Links>
      </ContentInput>
    </>
  );
};
