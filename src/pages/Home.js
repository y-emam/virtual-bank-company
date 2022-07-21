import React, { useState } from "react";
import NavBar from "../components/navbar";
import Section from "../components/section";
import SideBar from "../components/sidebar";
import Welcome from "../components/welcome";
import {
  SectionData1,
  SectionData2,
  SectionData3,
} from "../components/section/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} clickMenu={clickMenu} />
      <NavBar clickMenu={clickMenu} />
      <Welcome />
      <Section {...SectionData1} />
      <Section {...SectionData2} />
      <Section {...SectionData3} />
    </>
  );
};

export default Home;
