import React from "react";
import { Link } from "react-router-dom";
import { Image, LogoWrapper, Text } from "./header.styles";

const Header: React.FC = () => {

  return (
    <LogoWrapper>
      <Link to="/" className="link-wrapper">
        <Image src={"/assets/remitflexlogo.png"} alt="logo" />
        <Text>
          {" "}
          Remit<span>flex</span>
        </Text>
      </Link>
    </LogoWrapper>
  );
};

export default Header;