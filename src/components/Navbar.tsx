import styled from "styled-components";
import logo from "../assets/abg_test.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import smallLogo from "../assets/logo_mobile.png";
import { Link } from "react-router-dom";

const logoVisible = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
const Navbar = () => {
  const location = useLocation();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [scrollPosition, setScrollPosition] = useState(0);
  let turnArrowUp = false;
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  if (scrollPosition < 100) {
    turnArrowUp = false;
  } else {
    turnArrowUp = true;
  }
  return (
    <Wrapper>
      <Link to="/">
        {/* {windowSize.innerWidth > 900 && location.pathname != "/" ? (
          <motion.img src={logo} alt="Logo" className="logo" />
        ) : (
          <motion.img
            src={smallLogo}
            alt="smallLogo"
            className="logo small-logo"
            variants={logoVisible}
            initial="hidden"
            animate="visible"
          />
        )} */}

        {windowSize.innerWidth > 900 && (
          <motion.img src={logo} alt="Logo" className="logo" />
        )}
        {windowSize.innerWidth < 901 && location.pathname != "/" && (
          <motion.img
            src={smallLogo}
            alt="smallLogo"
            className="logo small-logo"
            variants={logoVisible}
            initial="hidden"
            animate="visible"
          />
        )}
      </Link>
      <div
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          className={turnArrowUp ? "arrow-up" : "hidden"}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    cursor: pointer;
    position: fixed;
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
  .arrow-up {
    position: fixed;
    cursor: pointer;
    background-color: #5d6472;
    padding: 0.4rem;
    font-size: 2rem;
    border-radius: 0.4rem;
    bottom: 3%;
    right: 2%;
    z-index: 101;
  }
  .hidden {
    display: none;
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
