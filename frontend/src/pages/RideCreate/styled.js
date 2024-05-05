import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 12px;
  }

  > i {
    font-size: 20px;
    color: #ffa500;
  }
`;


export const Info = styled.div`
  display: flex;
  flex-direction: column;

  .date-and-time {
    display: flex;
    gap: 20px;
  }
`

export const CheckboxWrapper = styled.div`
  display: flex;  
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;
`

export const CheckboxFild = styled.div`
  > label {
    margin-right: 15px;
  }

  > input {
    margin-right: 5px;
    vertical-align: middle;
  }
`

export const TextArea = styled.textarea`
  outline:#FFA500;
  border: 1px solid #FFA500;
  padding: 5px 10px;
  border-radius: 5px;

`