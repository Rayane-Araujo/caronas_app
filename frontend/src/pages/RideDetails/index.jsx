import { Header } from "../../components/Header";
import { Button } from "../../styles/Button";


import RiderPhoto from "../../assets/images/foto_condutor.png";
import RideLine from "../../assets/images/Ride-line.png";



export const RideDetails = () => {
    return (
        <>
         <Header logo={RiderPhoto} title="Detalhes da carona" />
            <div className="rider-details">
                <span>Condutor: Luiz Meira</span>
                <span>Veiculo: VW Jetta Preto</span>
            </div>

            <div className="ride-observation">
                <h5>Observações</h5>
                <p>Preciso de uma carona, para realizar uma compra.</p>
            </div>

            <h5>Oferecendo carona de:</h5>

            <div className="ride">
              <img src={RideLine} alt="Linha da trajetoria da corrida" />
                <div className="ride-info">
                    <p>Terminal Rodoviário de Alcântara</p>
                    <p className="final-destiny">Terminal Rodoviário  Tietê</p>
                    <span className="final-destiny date-and-time-destiny">Data: 26/02/2024 ás 15:00hs</span>
                </div>
            </div>

          <Button className="details-button" type="submit">
            {"Demonstrar interesse"}
          </Button>
        </>
    );
};