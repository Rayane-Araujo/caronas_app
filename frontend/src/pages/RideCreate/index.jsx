import React, { useState } from "react";
import { Input } from "../../styles/Input";
import { Header } from "../../components/Header";
import { Button } from "../../styles/Button";
import { TypeCheckbox } from "../../components/Mui/CheckBox";
import { useRideCreate } from "../../hooks/useRideCreate";
import { ContentInput, Form } from "../../pages/Login/styled";
import { Info, InputWrapper, TextArea } from "./styled";

import logo from "../../assets/images/LogoFoto.jpg";

export const RideCreate = () => {
  const mutateRideCreate = useRideCreate();
  const [formData, setFormData] = useState({
    origin: "",
    destiny: "",
    time: "",
    date: "",
    observation: "",
    type: "offer",
  });
  
  const { origin, destiny, time, date, observation } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutateRideCreate.mutate(formData);
  };

  const handleTypeChange = (selectedType) => {
    setFormData({ ...formData, type: selectedType });
  };

  return (
    <>
      <Header logo={logo} title="Criar carona" />
      <ContentInput>
        <Form onSubmit={handleSubmit}>
          <div>
            <InputWrapper>
              <i className="las la-map-pin"></i>
              <label>Origem</label>
            </InputWrapper>
            <Input
              type="text"
              name="origin"
              value={origin}
              onChange={handleChange}
            />
          </div>

          <div>
            <InputWrapper>
              <i className="las la-map-marker"></i>
              <label>Destino</label>
            </InputWrapper>
            <Input
              type="text"
              name="destiny"
              value={destiny}
              onChange={handleChange}
            />
          </div>

          <Info>
            <p>Informações</p>
            <div className="date-and-time">
              <Input
                type="date"
                value={date}
                style={{ color: "#0000005e" }}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
              <Input
                type="time"
                style={{ color: "#0000005e" }}
                value={time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
              />
            </div>
          </Info>

          <label>Observações</label>
          <TextArea
            cols="30"
            rows="10"
            name="observation"
            value={observation}
            onChange={handleChange}
          />

          <TypeCheckbox onChange={handleTypeChange} />

          <Button type="submit">Criar</Button>
        </Form>
      </ContentInput>
    </>
  );
};
