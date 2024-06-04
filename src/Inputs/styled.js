import { styled } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

export const Input = styled.input`
  flex-basis: 350px;
  padding: 25px;
  border-radius: 5px;
  background-color: #f1f2f5;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);

  @media (max-width: 912px) {
    width: 100px;
    margin: 5px;
  }
`;
