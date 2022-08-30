import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media (max-width: 768px) {
    height: 1100px;
  }
  @media (max-width: 480px) {
    height: 1300px;
  }
`;
export const ServicesH1 = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 2rem;
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 480px;
  padding: 30px;
  transition: all 0.2 ease-in-out;
`;
