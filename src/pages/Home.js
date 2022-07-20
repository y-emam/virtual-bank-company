import React, { useState } from "react";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} clickMenu={clickMenu} />
      <NavBar clickMenu={clickMenu} />
    </>
  );
};

export default Home;
