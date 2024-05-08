import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 80px;
`

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
  border-radius: 31px;
  height: 47px;
  box-shadow: 0px 10px 9px rgba(50, 64, 1, 0.25);
  color: #ffffff;
  font-family: "Itim", cursive;
  font-weight: 400;
  background: #ffa500;
  border-style: none;
  font-size: 17px;
  cursor: pointer;
`

export const ProfileWrapper = styled.div`
  display: flex; 
  gap: 20px;
  font-size: 15px;
  color: #6e6e6e;
  font-weight: 500;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  > span {
    font-family: 'Inter', sans-serif;
  }
`

export const RideListWrapper = styled.div`
  width: 50vh;
  gap: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

`

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-top: 20px;
`

export const List = styled.div`
  display: flex;
  width: 381px;
  height: 64px;
  border-radius: 0px 12px 12px 0px;
  border-right: 1px solid #FFA500;

  > img {
    width: 52px;
    height: 55px;
    border: 1px 0px 0px 0px;
  }
`

export const InfoWrapper = styled.div`
  color: #6E6E6E;
  font-family: Inter;
  padding: 5px;
  width: 100%;
`

export const ProfileName = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
`

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const Date = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;

  > span {
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
  }

  > img {
    position: absolute;
    right: 15%;
  }
`