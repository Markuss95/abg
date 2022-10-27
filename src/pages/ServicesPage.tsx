import styled from "styled-components";
import Footer from "../components/Footer";
import backgroundPhoto from "../assets/Usluge.jpg";
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
          <div>Asfalt</div>
          <div>Beton</div>
          <div>Geomehanička ispitivanja</div>
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
  .homeImage {
    width: 100vw;
    height: 100vh;
    position: relative;
    object-fit: cover;
  }
  .services-container {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export default ServicesPage;
