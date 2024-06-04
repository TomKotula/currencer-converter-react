import { styled } from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

export const Select = styled.select`
  flex-basis: 350px;
  padding: 25px;
  border-radius: 5px;

  @media (max-width: 912px) {
    width: 100px;
    margin: 5px;
  }
`;
