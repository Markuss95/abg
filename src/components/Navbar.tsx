import styled from "styled-components";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { actionCreators } from "../state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import smallLogo from "../assets/logo_mobile.png";
import { Link } from "react-router-dom";
import logo from "../assets/abg_test.png";

const logoVisible = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const logoInvisible = {
  initial: { x: 0 },
  animate: {
    x: 300,
    transition: {
      duration: 1.5,
    },
  },
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
const Navbar = () => {
  const dispatch = useDispatch();
  const { increaseCount } = bindActionCreators(actionCreators, dispatch);
  const location = useLocation();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [scrollPosition, setScrollPosition] = useState(0);
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  // const [mouseMoved, setMouseMoved] = useState(false);
  let turnArrowUp = false;

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  // useEffect=(()=>{
  //   addEventListener("mousemove", (event) => {});
  //   onmousemove = (event) => {setMouseMoved(true)};
  // },[mouseMoved])
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
  if (window.innerWidth < 1176) {
    turnArrowUp = false;
  }
  if (location.pathname === "/asphalt" || location.pathname === "/concrete") {
    turnArrowUp = false;
  }

  window.onscroll = function (e) {
    setUserHasScrolled(true);
  };

  useEffect(() => {
    if (userHasScrolled === true) {
      setTimeout(() => {
        setUserHasScrolled(false);
      }, 3000);
    }
  }, [userHasScrolled]);

  if (!userHasScrolled && scrollPosition > 20) {
    return (
      <Wrapper>
        <Link to="/" onClick={() => increaseCount(122)}>
          {windowSize.innerWidth > 900 && (
            <motion.img
              src={logo}
              alt="Logo"
              className="hidden"
              variants={logoInvisible}
              initial="initial"
              animate="visible"
            />
          )}
          {windowSize.innerWidth < 901 && location.pathname !== "/" && (
            <motion.img
              src={smallLogo}
              alt="smallLogo"
              className="logo small-logo"
              variants={logoInvisible}
              initial="initial"
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
  } else {
    return (
      <Wrapper>
        <Link to="/" onClick={() => increaseCount(122)}>
          {windowSize.innerWidth > 900 && (
            <motion.img src={logo} alt="Logo" className="logo" />
          )}
          {windowSize.innerWidth < 901 && location.pathname !== "/" && (
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
  }
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
