import React from "react";
import img1 from "../../assets/images/svg_1.svg";
import img2 from "../../assets/images/svg_2.svg";
import img3 from "../../assets/images/svg_3.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our Services</ServicesH1>

      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={img1}></ServicesIcon>
          <ServicesH2>Accessibility</ServicesH2>
          <ServicesP>
            You can use the website or download the app to track your account,
            spendings and trnasfers.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={img2}></ServicesIcon>
          <ServicesH2>Discounts</ServicesH2>
          <ServicesP>
            Several customers will get discounts at the end of the each month.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={img3}></ServicesIcon>
          <ServicesH2>Around the world</ServicesH2>
          <ServicesP>
            Get Credit cards that can be used in any ATM around the world
            without taking any percentage of your money.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
