/* eslint-disable react/prop-types */
import { HeaderContainer } from "./styled";


export const Header = ({ logo, title }) => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo do App Caronas" id="fotoo" />
      <h3>{title}</h3>
    </HeaderContainer>
  );
};
