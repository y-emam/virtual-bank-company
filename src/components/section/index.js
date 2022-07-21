import React from "react";
import { Button } from "../ButtonElement";
import {
  BtnWrapper,
  InfoContainer,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrapper,
  InfoRow,
  InfoWrapper,
  Paragraph,
  TextWrapper,
  TopLine,
} from "./SectionElements";

const Section = ({
  id,
  lightBg,
  imgStart,
  topLine,
  darkBtn,
  headline,
  darkText,
  description,
  btnLabel,
  alt,
  img,
}) => {
  return (
    <InfoContainer id={id} lightBg={lightBg}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading darkText={darkText}>{headline}</Heading>
              <Paragraph darkText={darkText}>{description}</Paragraph>
              <BtnWrapper>
                <Button big={"true"} primary={"true"} dark={darkBtn} to="/home">
                  {btnLabel}
                </Button>
              </BtnWrapper>
            </TextWrapper>
          </Column1>

          <Column2>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Section;
