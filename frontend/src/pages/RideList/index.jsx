import logo from "../../assets/images/LogoFoto.jpg";
import IconUser from "../../assets/images/icon_user.png";
import IconCar from "../../assets/images/icon_car.png";
import IconClock from "../../assets/images/icon_clock.png";
import IconArrowRight from "../../assets/images/other_arrow-right.png";
import PhotoUser from "../../assets/images/foto_condutor.png";

import {
  Profile,
  Container,
  ProfileWrapper,
  RideListWrapper,
  BtnWrapper,
  List,
  ProfileName,
  InfoWrapper,
  Date,
  DateWrapper,
  StyledLink,
} from "./styled";

import { Header } from "../../components/Header";


export const RideList = () => {
  return (
    <>
      <Header logo={logo} title="Caronas disponíveis" />

      <Container>
        <ProfileWrapper>
          <Profile>
            <span>Condutor</span>
            <img src={IconCar} />
          </Profile>

          <Profile>
            <span>Solicitante</span>
            <img src={IconUser} />
          </Profile>
        </ProfileWrapper>

        <BtnWrapper>
          <StyledLink to="/ride-create">Oferecer/Pedir</StyledLink>
        </BtnWrapper>

        <RideListWrapper>
          <List>
            <img src={PhotoUser} alt="Foto do usu" />
            <InfoWrapper>
              <ProfileName>
                <img src={IconCar} />
                <span>Luiz Meira Santos</span>
              </ProfileName>
              <DateWrapper>
                <img src={IconClock} />
                <Date>
                  <span>13:00</span>
                  <span>26/02/2024</span>
                  <img src={IconArrowRight} alt="Seta para direita" />
                </Date>
              </DateWrapper>
            </InfoWrapper>
          </List>
        </RideListWrapper>
      </Container>
    </>
  );
};
