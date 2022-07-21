import React from "react";
import { Button } from "react-scroll";
import "../../assets/images/svg_1.svg";
import { SectionData1 } from "./Data";

import {
  BtnWrapper,
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

const Section = () => {
  return (
    <Section id={1} lightBg={SectionData1.lightBg}>
      {/* <InfoWrapper>
        <InfoRow imgStart={SectionData1.imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{SectionData1.topLine}</TopLine>
              <Heading lightText={SectionData1.lightText}>
                {SectionData1.headline}
              </Heading>
              <Paragraph darkText={SectionData1.darkText}>
                {SectionData1.description}
              </Paragraph>
              <BtnWrapper>
                <Button to="/home">{SectionData1.btnLabel}</Button>
              </BtnWrapper>
            </TextWrapper>
          </Column1>

          <Column2>
            <ImgWrapper>
              <Img src={SectionData1.img} alt={SectionData1.alt} />
            </ImgWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper> */}
    </Section>
  );
};

export default Section;
