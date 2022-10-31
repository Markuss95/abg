import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faHand,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

const pageContentVisible = {
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

const UpperHexagons = () => {
  return (
    <Wrapper variants={pageContentVisible} initial="hidden" animate="visible">
      <div className="container">
        <Link to="/home">
          <div className=" scale">
            <div className="hexagon">
              <FontAwesomeIcon icon={faHouse} className="faicon" />
              <div className="text-inside">
                <motion.p>Poč</motion.p>
                <motion.p>etna</motion.p>
              </div>
            </div>
          </div>
        </Link>

        <div className="scale">
          <div className="hexagon hexagon-second">
            <FontAwesomeIcon icon={faCircleInfo} className="faicon" />
            <div className="text-inside">
              <motion.p>O Nama</motion.p>
            </div>
          </div>
        </div>
        <Link to="/services">
          <div className="scale">
            <div className="hexagon hexagon-third">
              <FontAwesomeIcon icon={faHand} className="faicon " />
              <div className="text-inside">
                <motion.p>Usl</motion.p>
                <motion.p>uge</motion.p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/contacts">
          <div className="scale">
            <div className="hexagon hexagon-forth">
              <FontAwesomeIcon icon={faAddressBook} className="faicon" />
              <div className="text-inside">
                <motion.p>Kont</motion.p>
                <motion.p>akt</motion.p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled(motion.div)`
  position: relative;
  justify-content: center;
  align-items: center;
  .about-us-txt {
    padding-right: 0.3rem;
  }
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
    color: #ababab;
  }

  .scale {
    padding-top: 3rem;
    /* margin-right: 7rem; */
    transition-duration: 0.25s;
  }
  .scale:hover {
    scale: 1.2;
  }
  .hexagon {
    position: relative;
    cursor: pointer;
    /* margin-left: 6em; */
    width: 7em;
    height: 11.5em;
    border-radius: 1em/0.5em;
    background: #5d6472;
    transition: opacity 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hexagon:nth-child(odd) {
    margin-left: 6em;
  }
  /* .hexagon-second {
    margin-left: 6rem;
  }
  .hexagon-third {
    margin-left: 6rem;
  }
  .hexagon-forth {
    margin-left: 6rem;
  } */
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

  .text-inside {
    color: #ababab;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
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
      padding-top: 3rem;
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
      /* margin-left: 10rem; */
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
      margin-right: 1rem;
      /* margin-left: 6rem; */
    }
  }
`;
export default UpperHexagons;
