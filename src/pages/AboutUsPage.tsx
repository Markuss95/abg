import styled from "styled-components";
import Footer from "../components/Footer";
import AboutUsPhoto from "../assets/aboutus.jpg";
const AboutUsPage = () => {
  return (
    <>
      <Wrapper>
        <div className="image-container">
          <img
            src={AboutUsPhoto}
            alt="backgroundPhoto"
            className="aboutImage"
          />
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
    img {
      min-width: 100vw;
      object-fit: cover;
    }
  }
`;

export default AboutUsPage;
