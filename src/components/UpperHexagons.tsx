import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faHand,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/abg_test.png";

const pageContentVisible = {
  hidden: {
    opacity: 0,
    x: "100vh",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffnes: 150,
      delay: 0.5,
    },
  },
};

const UpperHexagons = () => {
  return (
    <Wrapper variants={pageContentVisible} initial="hidden" animate="visible">
      <img src={logo} alt="Logo" className="logo" />;
      <div className="container">
        <div className=" scale">
          <div className="hexagon">
            <FontAwesomeIcon icon={faHouse} className="faicon" />
            <p className="text-inside">Početna</p>
          </div>
        </div>
        <div className="scale">
          <div className="hexagon hexagon-second">
            <FontAwesomeIcon icon={faCircleInfo} className="faicon" />
            <p className="text-inside">O nama</p>
          </div>
        </div>
        <div className="scale">
          <div className="hexagon hexagon-third">
            <FontAwesomeIcon icon={faHand} className="faicon " />
            <p className="text-inside">Usluge</p>
          </div>
        </div>
        <div className="scale">
          <div className="hexagon hexagon-forth">
            <FontAwesomeIcon icon={faAddressBook} className="faicon" />
            <p className="text-inside">Kontakt</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled(motion.div)`
  position: relative;

  .container {
    min-height: 80vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 67%;
    margin-left: 13.1vw;
    padding-top: 3rem;
  }
  .faicon {
    z-index: 100;
    padding-bottom: 5rem;
    font-size: 1.7rem;
  }

  .scale {
    /* padding-top: 3rem; */
    transition-duration: 0.25s;
  }
  .scale:hover {
    scale: 1.2;
  }
  .hexagon {
    position: relative;
    cursor: pointer;
    margin-left: 6em;
    width: 7em;
    height: 11.5em;
    border-radius: 1em/0.5em;
    background: #5d6472;
    transition: opacity 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 30vw; */
  }
  .hexagon-second {
    margin-left: 6rem;
  }
  .hexagon-third {
    margin-left: 6rem;
  }
  .hexagon-forth {
    margin-left: 6rem;
  }
  .hexagon:before,
  .hexagon:after {
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: inherit;
    content: "";
  }

  .hexagon:before {
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg);
  }

  .hexagon:after {
    -webkit-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }

  .hexagon:hover > .faicon {
    color: white;
  }
  .hexagon:hover > .text-inside {
    color: white;
  }
  .logo {
    position: absolute;
    padding-left: 2rem;
    padding-top: 2rem;
    height: auto;
    width: auto;
    max-width: 300px;
    max-height: 300px;
    cursor: pointer;
  }
  .text-inside {
    color: #ababab;
    position: absolute;
    z-index: 1;
  }

  @media only screen and (max-width: 942px) {
    .container {
      /* min-height: 80; */
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: auto;
      width: 60%;
      margin-left: 10%;
      padding-bottom: 0;
    }
    .scale {
      padding-top: 0;
    }
    .logo {
      max-height: 180px;
      max-width: 180px;
    }
    .first-container {
      margin-left: 0rem;
    }
    .hexagon {
      margin-bottom: 1rem;
      margin-top: 1rem;
      margin-left: 10rem;
    }
  }
  @media only screen and (max-width: 642px) {
    .first-container {
      margin-left: 0rem;
    }
    .logo {
      display: none;
    }
    .hexagon {
      margin-bottom: 1rem;
      margin-left: 6rem;
    }
  }
`;
export default UpperHexagons;
