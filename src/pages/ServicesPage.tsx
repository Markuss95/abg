import styled from "styled-components";
import Footer from "../components/Footer";
import backgroundPhoto from "../assets/Usluge.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faCube, faFlaskVial } from "@fortawesome/free-solid-svg-icons";

const ServicesPage = () => {
  return (
    <>
      <Wrapper>
        <div className="image-container">
          <img
            src={backgroundPhoto}
            alt="backgroundPhoto"
            className="homeImage"
          />
        </div>
        <div className="services-container">
          <div className="left-pluses">
            <p>
              <span>++++++++</span>
              <span>++++++++</span>
              <span>++++++++</span>
              <span>++++++++</span>
              <span>++++++++</span>
            </p>
          </div>
          <div>Asfalt</div>
          <div>Beton</div>
          <div>Geomehanička ispitivanja</div>
          <div className="right-pluses">
            <p>
              <span>++++++++</span>
              <span>++++++++</span>
              <span>++++++++</span>
              <span>++++++++</span>
              <span>++++++++</span>
            </p>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  .image-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .left-pluses {
    padding-left: 2rem;
    color: white;
    font-size: 1.5rem;
    p {
      span {
        letter-spacing: 0.55rem;
        display: block;
      }
    }
  }
  .homeImage {
    width: 100vw;
    height: 100vh;
    position: relative;
    object-fit: cover;
  }
  .right-pluses {
    position: relative;

    color: white;
    font-size: 1.5rem;
    p {
      position: absolute;
      bottom: 0%;
      right: 10%;

      span {
        letter-spacing: 0.55rem;
        display: block;
      }
    }
  }
  .services-container {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
export default ServicesPage;
