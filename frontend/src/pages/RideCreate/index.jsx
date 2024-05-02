import { Header } from "../../components/Header";
import { Button } from "../../styles/Button";
import { Input } from "../../styles/Input";
import { ContentInput, Form } from "../../pages/Login/styled";

import logo from "../../assets/images/LogoFoto.jpg";
import origin from "../../assets/images/Origem.png";
import destiny from "../../assets/images/Destino.png";
import watch from "../../assets/images/icon_clock.png";
import calendar from "../../assets/images/Calendar.png";



export const RideCreate = () => {
  return (
    <>
      <Header logo={logo} title="Criar carona" />
      <ContentInput>
        <Form>
            <div className="search-ride-create">
              <img src={origin}  alt="Ícone de origem da carona" />
              <label>Origem</label>
              <Input
                type="text"
                name="origin"
                // value={formData.origin}
              />
            </div>

          <div className="search-ride-create">
            <img  src={destiny} alt="Ícone de destino da carona" />
            <label>Destino</label>
            <Input
              type="text"
              name="destiny"
              // value={formData.destiny}
            />
          </div>

          <div className="info">
            <p>
              Informações
            </p>
            <div className="date-and-time">
              <img src={watch} alt="Ícone de relogio" />
              <span>19:00</span>

              <img src={calendar} alt="Ícone de calendario" />
              <span>02/05/2024</span>
            </div>
          </div>

            <label>Observações</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>

               <div className="checkbox">
                  <div className="checkbox-fild">
                    <input type="checkbox" />
                    <label>Procurando</label>

                    <input type="checkbox" />
                    <label>Oferecendo</label>
                  </div>
               </div>

          <Button type="submit">
            {"Criar"}
          </Button>
        </Form>
      </ContentInput>
    </>
  );
};
