import React, { useState } from "react";
import video from "../../assets/videos/Earth.mp4";
import { Button } from "../ButtonElement";
import {
  WelcomeBg,
  VideoBg,
  WelcomeContainer,
  WelcomeContent,
  WelcomeH1,
  WelcomeP,
  ArrowRight,
  ArrowForward,
} from "./WelcomeElements";

const Welcome = ({ Video }) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <WelcomeContainer>
      <WelcomeBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </WelcomeBg>

      <WelcomeContent>
        <WelcomeH1>Virtual Bank is the Future</WelcomeH1>
        <WelcomeP>
          Create your own account NOW to have the chance to win prices as
          tickets the World's Final Cup 2022
        </WelcomeP>

        <Button
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          primary={"true"}
          dark={"true"}
          to="/home"
        >
          Get Started {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </WelcomeContent>
    </WelcomeContainer>
  );
};

export default Welcome;
