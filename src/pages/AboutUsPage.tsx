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
            ABG test se sastoji od centralnog laboratorija smještenog u Drinskoj
            123/a Osijek i terenskog laboratorija za ispitivanje asfalta i
            bitumenskog veziva koji se nalazi u Našicama.
          </p>
          <p>
            Djelatnici ABG test-a su obučeni i stručni, a ispitivanja provode
            umjerenom opremom. Posjedujemo potvrdu o{" "}
            <a
              className="acreditation-link"
              href="https://drive.google.com/uc?export=download&id=1QPkPsP88AVfdiX1pRJSZL_j4jyczFeAs"
            >
              akreditaciji
            </a>
            . U ovom trenutku imamo 23 akreditirane metode ispitivanja.
          </p>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  .acreditation-link {
    color: white;
    /* text-decoration: none; */
    color: white;
    font-family: "bold";
    transition-duration: 0.5s;
  }
  .acreditation-link:hover {
    color: blue;
  }
  .about-us-container {
    position: relative;
    /* height: 60vh; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    color: white;
    p {
      text-align: left;
      line-height: 3rem;
      font-size: 1.4rem;
      margin: 6.5rem 6.5rem;
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
