import styled from "styled-components";


export const LoginContainer = styled.main `

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 135px;
  min-height: 68vh;

`


export const ContendInput = styled.div `

  display: flex;
  margin-right: 20px;
  flex-direction: column;
  align-items: center;
  gap: 20px;

`

export const InputContainer = styled.div `

  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  > span {
  font-size: 12px;
  font-family: Open Sans;
  color: #808080;
  position: absolute;
  top: -7px;
  left: 10px;
  background-color: white;
}

`