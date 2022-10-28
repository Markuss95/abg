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
          <div className="asphalt-container">
            <p className="services-text">
              <span>Naše</span>
              <span>Usluge</span>
            </p>
            <div className="asphalt-card">
              <FontAwesomeIcon icon={faRoad} className="asphalt-icon" />
              <p>Ispitivanja proizvedenih i ugrađenih asfaltnih mješavina</p>
            </div>
          </div>
          <div className="concrete-container">
            <div className="concrete-card">
              <FontAwesomeIcon icon={faCube} className="concrete-icon" />
              <p>Ispitivanja svježeg i očvrsnulog betona </p>
            </div>
          </div>
          <div className="geothermic-container">
            <div className="geothermic-card">
              <FontAwesomeIcon icon={faFlaskVial} className="geothermic-icon" />
              <p>Geomehanička ispitivanja </p>
            </div>
          </div>

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
  font-family: "Bold";
  .asphalt-card {
    position: absolute;
    bottom: 2%;
    width: 20rem;
    height: 24rem;
    background-color: #5d6472;
    border-radius: 0px 26px 0px 26px;
    transition-duration: 0.3s;
    p {
      font-family: "Regular";
      font-size: 1.3rem;
      color: white;
      margin-left: 3rem;
      line-height: 2.6rem;
      margin-right: 1rem;
    }
  }
  .asphalt-card:hover {
    scale: 1.1;
  }
  .asphalt-container {
    position: relative;
  }
  .asphalt-icon {
    color: white;
    font-size: 2.9rem;
    margin-left: 3rem;
    margin-top: 2rem;
  }
  .concrete-card {
    position: absolute;
    bottom: 28%;
    width: 20rem;
    height: 24rem;
    background-color: #5d6472;
    border-radius: 0px 26px 0px 26px;
    transition-duration: 0.3s;
    p {
      font-family: "Regular";
      font-size: 1.3rem;
      color: white;
      margin-left: 3rem;
      line-height: 2.6rem;
      margin-right: 1rem;
    }
  }
  .concrete-card:hover {
    scale: 1.1;
  }
  .concrete-container {
    position: relative;
  }
  .concrete-icon {
    color: white;
    font-size: 2.9rem;
    margin-left: 3rem;
    margin-top: 2rem;
  }
  .geothermic-card {
    position: absolute;
    bottom: 54%;
    width: 20rem;
    height: 24rem;
    background-color: #5d6472;
    border-radius: 0px 26px 0px 26px;
    transition-duration: 0.3s;
    p {
      font-family: "Regular";
      font-size: 1.3rem;
      color: white;
      margin-left: 3rem;
      line-height: 2.6rem;
      margin-right: 1rem;
    }
  }
  .geothermic-card:hover {
    scale: 1.1;
  }
  .geothermic-container {
    position: relative;
  }
  .geothermic-icon {
    color: white;
    font-size: 2.9rem;
    margin-left: 3rem;
    margin-top: 2rem;
  }
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
  .services-text {
    font-size: 3rem;
    color: white;
    span {
      display: block;
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }

  @media only screen and (max-width: 1550px) {
    .asphalt-card {
      height: 18rem;
      width: 16rem;
      p {
        line-height: 1.7rem;
      }
    }
    .concrete-card {
      height: 18rem;
      width: 16rem;
      p {
        line-height: 1.7rem;
      }
    }
    .geothermic-card {
      height: 18rem;
      width: 16rem;
      p {
        line-height: 1.7rem;
      }
    }
  }
  @media only screen and (max-width: 1300px) {
    .asphalt-card {
      height: 14rem;
      width: 14rem;

      p {
        line-height: 1.7rem;
        font-size: 1rem;
      }
    }
    .concrete-card {
      height: 14rem;
      width: 14rem;
      p {
        line-height: 1.7rem;
        font-size: 1rem;
      }
    }
    .geothermic-card {
      height: 14rem;
      width: 14rem;
      p {
        line-height: 1.7rem;
        font-size: 1rem;
      }
    }
  }
`;
export default ServicesPage;
