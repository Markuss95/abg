import styled from "styled-components";
import logo from "../assets/abg_test.png";
import { useState, useEffect } from "react";
import smallLogo from "../assets/logo_mobile.png";
import { Link } from "react-router-dom";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
const Navbar = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Wrapper>
      <Link to="/">
        {windowSize.innerWidth > 900 ? (
          <img src={logo} alt="Logo" className="logo" />
        ) : (
          <img src={smallLogo} alt="smallLogo" className="logo small-logo" />
        )}
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
  .small-logo {
    position: absolute;
    height: 7rem;
    width: 7rem;
  }
  @media only screen and (max-width: 628px) {
    .small-logo {
      height: 5rem;
      width: 5rem;
    }
  }
  @media only screen and (max-width: 420px) {
    .small-logo {
      left: 0.7rem;
      top: 0.7rem;
      height: 4rem;
      width: 4rem;
    }
  }
`;
export default Navbar;
