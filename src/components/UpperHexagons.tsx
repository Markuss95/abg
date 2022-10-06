import styled from "styled-components";
import { motion } from "framer-motion";

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
      <div className=" scale">
        <div className="hexagon">
          <div className="text-inside">Ikona</div>
        </div>
      </div>
      <div className="scale">
        <div className="hexagon hexagon-second">
          <div className="text-inside">Ikona dva</div>
        </div>
      </div>
      <div className="scale">
        <div className="hexagon hexagon-third">
          <div className="text-inside">Ikona tri</div>
        </div>
      </div>
      <div className="scale">
        <div className="hexagon hexagon-forth">
          <div className="text-inside">Ikona cetri</div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled(motion.div)`
  position: absolute;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 67%;
  margin-left: 13.1vw;
  /* padding-bottom: 27vh; */
  /* .first-container {
    margin-left: 2rem !important;
  } */
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
    background: #696969;
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
  .text-inside {
    color: white;
    position: absolute;
    z-index: 1;
  }

  @media only screen and (max-width: 942px) {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    width: 60%;
    margin-left: 10%;
    padding-bottom: 0;
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
