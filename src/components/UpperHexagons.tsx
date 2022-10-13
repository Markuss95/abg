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
    // x: "100vh",
  },
  visible: {
    opacity: 1,
    // x: 0,
    transition: {
      // type: "spring",
      // stiffnes: 150,
      duration: 2,
    },
  },
};

// const textVariantsLeft = {
//   hover: {
//     x: [-10, 0],
//     scale: [1.1, 1],
//     duration: 5,
//     opacity: [0, 1],
//   },
//   initial: {
//     x: 0,
//     scale: 1,
//     opacity: 1,
//   },
// };
// const textVariantsRight = {
//   hover: {
//     x: [10, 0],
//     scale: [1.1, 1],
//     opacity: [0, 1],
//   },
//   initial: {
//     x: 0,
//     scale: 1,
//     opacity: 1,
//   },
// };

const UpperHexagons = () => {
  // const [isHoveredOne, setIsHoveredOne] = useState(false);
  // const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  // const [isHoveredThree, setIsHoveredThree] = useState(false);
  // const [isHoveredFour, setIsHoveredFour] = useState(false);

  // function handleMouseEnterOne() {
  //   setIsHoveredOne(true);
  // }
  // function handleMouseLeaveOne() {
  //   setIsHoveredOne(false);
  // }
  // function handleMouseEnterTwo() {
  //   setIsHoveredTwo(true);
  // }
  // function handleMouseLeaveTwo() {
  //   setIsHoveredTwo(false);
  // }
  // function handleMouseEnterThree() {
  //   setIsHoveredThree(true);
  // }
  // function handleMouseLeaveThree() {
  //   setIsHoveredThree(false);
  // }
  // function handleMouseEnterFour() {
  //   setIsHoveredFour(true);
  // }
  // function handleMouseLeaveFour() {
  //   setIsHoveredFour(false);
  // }
  return (
    <Wrapper variants={pageContentVisible} initial="hidden" animate="visible">
      <div className="container">
        <Link to="/home">
          <div
            className=" scale"
            // onMouseEnter={handleMouseEnterOne}
            // onMouseLeave={handleMouseLeaveOne}
          >
            <div className="hexagon">
              <FontAwesomeIcon icon={faHouse} className="faicon" />
              <div className="text-inside">
                <motion.p
                // variants={textVariantsLeft}
                // animate={isHoveredOne ? "hover" : "initial"}
                >
                  Poč
                </motion.p>
                <motion.p
                // variants={textVariantsRight}
                // animate={isHoveredOne ? "hover" : "initial"}
                >
                  etna
                </motion.p>
              </div>
            </div>
          </div>
        </Link>
        <div
          className="scale"
          // onMouseEnter={handleMouseEnterTwo}
          // onMouseLeave={handleMouseLeaveTwo}
        >
          <div className="hexagon hexagon-second">
            <FontAwesomeIcon icon={faCircleInfo} className="faicon" />
            <div className="text-inside">
              <motion.p
              // variants={textVariantsLeft}
              // animate={isHoveredTwo ? "hover" : "initial"}
              // className="about-us-txt"
              >
                O Nama
              </motion.p>
            </div>
          </div>
        </div>
        <div
          className="scale"
          // onMouseEnter={handleMouseEnterThree}
          // onMouseLeave={handleMouseLeaveThree}
        >
          <div className="hexagon hexagon-third">
            <FontAwesomeIcon icon={faHand} className="faicon " />
            <div className="text-inside">
              <motion.p
              // variants={textVariantsLeft}
              // animate={isHoveredThree ? "hover" : "initial"}
              >
                Usl
              </motion.p>
              <motion.p
              // variants={textVariantsRight}
              // animate={isHoveredThree ? "hover" : "initial"}
              >
                uge
              </motion.p>
            </div>
          </div>
        </div>
        <div
          className="scale"
          // onMouseEnter={handleMouseEnterFour}
          // onMouseLeave={handleMouseLeaveFour}
        >
          <div className="hexagon hexagon-forth">
            <FontAwesomeIcon icon={faAddressBook} className="faicon" />
            <div className="text-inside">
              <motion.p
              // variants={textVariantsLeft}
              // animate={isHoveredFour ? "hover" : "initial"}
              >
                Kont
              </motion.p>
              <motion.p
              // variants={textVariantsRight}
              // animate={isHoveredFour ? "hover" : "initial"}
              >
                akt
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled(motion.div)`
  position: relative;

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
