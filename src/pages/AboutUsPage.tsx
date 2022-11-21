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
        <div className="about-us-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            repudiandae aperiam distinctio corrupti, tempore explicabo dolor
            quos! Perspiciatis voluptate quis aperiam at officiis debitis,
            eveniet odio quo excepturi unde incidunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste earum
            mollitia, ea libero tempora neque labore. Facilis earum nemo
            perferendis possimus rerum omnis. Enim molestias quaerat rem, facere
            vitae voluptates?
          </p>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  .about-us-container {
    position: relative;
    height: 60vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    color: white;
    p {
      text-align: left;
      line-height: 3rem;
      font-size: 1.4rem;
      margin: 4rem 4rem;
    }
  }
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
