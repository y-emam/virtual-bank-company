import styled from "styled-components";

export const ServicesContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #010606;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesH1 = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 2.5rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  height: 250px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
