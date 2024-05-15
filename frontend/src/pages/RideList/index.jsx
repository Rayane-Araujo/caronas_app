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
import { useRideList } from "../../hooks/useRideList";
import { formatDate } from "../../utils/FormatDate";

export const RideList = () => {
  const { data } = useRideList();

  return (
    <>
      <Header logo={logo} title="Caronas disponíveis" />

      <Container>
        <ProfileWrapper>
          <Profile>
            <span>Condutor</span>
            <img src={IconCar} alt="Ícone Carro" />
          </Profile>

          <Profile>
            <span>Solicitante</span>
            <img src={IconUser} alt="Ícone Usuário" />
          </Profile>
        </ProfileWrapper>

        <BtnWrapper>
          <StyledLink to="/ride-create">Oferecer/Pedir</StyledLink>
        </BtnWrapper>

        <RideListWrapper>
          {data &&
            data.dataRes.map((ride, index) => (
              <List key={index}>
                <img src={PhotoUser} alt="Foto do usuário" />
                <InfoWrapper>
                  <ProfileName>
                    <img src={IconCar} alt="Ícone Carro" />
                    <span>{ride.name}</span>
                  </ProfileName>
                  <DateWrapper>
                    <img src={IconClock} alt="Ícone Relógio" />
                    <Date>
                      <span>{ride.time}</span>
                      <span>{formatDate(ride.date)}</span>
                      <img src={IconArrowRight} alt="Seta para direita" />
                    </Date>
                  </DateWrapper>
                </InfoWrapper>
              </List>
            ))}
        </RideListWrapper>
      </Container>
    </>
  );
};
