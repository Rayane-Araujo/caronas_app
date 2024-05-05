import styled from "styled-components";


export const ContentInput = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  @media(min-width: 765px) {
    width: 50%; 
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 3rem;
  
  span {
    font-family: "Itim", sans-serif;
    color: #808080;
  }
`