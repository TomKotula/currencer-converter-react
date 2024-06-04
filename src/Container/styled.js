import { styled } from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 1000px;
  margin: 0 auto;
  margin-top: 70px;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 0 20px 0 #b3bbc673;
  background-color: #ffffff;

  @media (max-width: 912px), (min-width: 1024px) {
    max-width: 95%;
    padding: 0;
  }
`;
