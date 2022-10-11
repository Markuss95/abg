import styled from "styled-components";
import logo from "../assets/abg_test.png";
import { useState, useEffect } from "react";
import smallLogo from "../assets/logo_mobile.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  });
  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    cursor: pointer;
    position: absolute;
    left: 2rem;
    top: 2rem;
    height: auto;
    width: auto;
    max-width: 18rem;
    max-height: 18rem;
    z-index: 100;
  }
`;
export default Navbar;
