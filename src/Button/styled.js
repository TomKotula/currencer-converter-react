import { styled } from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const MainButton = styled.button`
  width: 80%;
  background-color: #5072a7;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 15px;

  &:hover {
    background-color: #537bbb;
  }

  &:active {
    background-color: #4773b9;
  }
`;
