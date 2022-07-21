import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  height: 860px;
  width: 100%;
  padding: 0 24px;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: center;
`;

export const InfoRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: bold;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "010606")};

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Paragraph = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  height: 100%;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin-bottom: 10px;
  padding-right: 0;
`;
