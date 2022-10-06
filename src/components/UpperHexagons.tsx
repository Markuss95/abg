import styled from "styled-components";
import { motion } from "framer-motion";
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
            <div className="text-inside">Početna</div>
          </div>
        </div>
        <div className="scale">
          <div className="hexagon hexagon-second">
            <div className="text-inside">O nama</div>
          </div>
        </div>
        <div className="scale">
          <div className="hexagon hexagon-third">
            <div className="text-inside">Usluge</div>
          </div>
        </div>
        <div className="scale">
          <div className="hexagon hexagon-forth">
            <div className="text-inside">Kontakt</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled(motion.div)`
  position: relative;

  .container {
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 67%;
    margin-left: 13.1vw;
  }
  .scale {
    transition-duration: 0.5s;
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
  .logo {
    position: absolute;
    height: auto;
    width: auto;
    max-width: 300px;
    max-height: 300px;
    cursor: pointer;
  }
  .text-inside {
    color: white;
    position: absolute;
    z-index: 1;
  }

  @media only screen and (max-width: 942px) {
    .container {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: auto;
      width: 60%;
      margin-left: 10%;
      padding-bottom: 0;
    }
    .logo {
      display: none;
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
    .hexagon {
      margin-bottom: 1rem;
      margin-left: 6rem;
    }
  }
`;
export default UpperHexagons;
