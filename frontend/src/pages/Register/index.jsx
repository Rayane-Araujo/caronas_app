import { Header } from "../../components/Header";
import { Button } from "../../styles/Button";
import { Input } from "../../styles/Input";
import logo from "../../assets/images/LogoFoto.jpg";
import { ContendInput, InputContainer } from "../../pages/Login/styled";

export const Register = () => {
  return (
    <div>
      <Header logo={logo} title="Cadastro" />
      <ContendInput>
        <InputContainer>
          <label>Nome</label>
          <Input type="name" id="name" />
        </InputContainer>

        <InputContainer>
          <label>Email</label>
          <Input type="email" id="email" />
        </InputContainer>

        <InputContainer>
          <label>Telefone</label>
          <Input type="telefone" id="telefone" />
        </InputContainer>


        <InputContainer>
          <label>Veículo</label>
          <Input type="veiculo" id="veiculo" />
        </InputContainer>

        <InputContainer>
          <label>Senha</label>
          <Input type="password" id="password" />
        </InputContainer>

        <InputContainer>
          <label>Confirmar senha</label>
          <Input type="password" id="password" />
        </InputContainer>

        <Button>Cadastrar</Button>
      </ContendInput>
    </div>
  );
};
