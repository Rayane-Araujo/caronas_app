import { Header } from "../../components/Header";
import { Button } from "../../styles/Button";
import { Input } from "../../styles/Input";
import { ContentInput, Form, Links } from "../../pages/Login/styled";
import { Link } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";

import logo from "../../assets/images/LogoFoto.jpg";

export const Register = () => {
  const { formData, setFormData, isSubmitting, setIsSubmitting } = useRegister();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <>
      <Header logo={logo} title="Cadastro" />
      <ContentInput>
        <Form onSubmit={handleSubmit}>
          
            <div>
              <label>Nome</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Telefone</label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Veículo</label>
              <Input
                type="text"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Senha</label>
              <Input
                type="password"
                name="pass"
                value={formData.pass}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Confirmar senha</label>
              <Input
                type="password"
                name="confirmPass"
                value={formData.confirmPass}
                onChange={handleChange}
              />
            </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </Form>

        <Links>
          <span>Já é cadastrado?</span>
          <Link to="/login">Faça login</Link>
        </Links>
      </ContentInput>
    </>
  );
};
