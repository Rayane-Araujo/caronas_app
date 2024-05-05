import { Header } from "../../components/Header";
import { Button } from "../../styles/Button";
import { Input } from "../../styles/Input";
import { ContentInput, Form } from "../../pages/Login/styled";
import { CheckboxFild, CheckboxWrapper, Info, InputWrapper, TextArea } from "./styled";
import { BasicDatePicker } from "../../components/Mui/DatePicker";
import { BasicTimePicker } from "../../components/Mui/TimePicker";

import logo from "../../assets/images/LogoFoto.jpg";
import Checkbox from "@mui/material/Checkbox";

export const RideCreate = () => {
  return (
    <>
      <Header logo={logo} title="Criar carona" />
      <ContentInput>
        <Form>
          <div>
            <InputWrapper>
              <i className="las la-map-pin"></i>
              <label>Origem</label>
            </InputWrapper>
            <Input type="text" name="origin" />
          </div>

          <div>
            <InputWrapper>
              <i className="las la-map-marker"></i>
              <label>Destino</label>
            </InputWrapper>
            <Input type="text" name="destiny" />
          </div>

          <Info>
            <p>Informações</p>
            <div className="date-and-time">
              <BasicTimePicker />

              <BasicDatePicker />
            </div>
          </Info>

          <label>Observações</label>
          <TextArea cols="30" rows="10" />

          <CheckboxWrapper>
            <CheckboxFild>
              <Checkbox
                defaultChecked
                sx={{
                  color: "#FFA500",
                  "&.Mui-checked": {
                    color: "#FFA500",
                  },
                }}
              />
              <label>Procurando</label>

              <Checkbox
                defaultChecked
                sx={{
                  color: "#FFA500",
                  "&.Mui-checked": {
                    color: "#FFA500",
                  },
                }}
              />
              <label>Oferecendo</label>
            </CheckboxFild>
          </CheckboxWrapper>

          <Button type="submit">{"Criar"}</Button>
        </Form>
      </ContentInput>
    </>
  );
};
