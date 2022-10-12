import styled from "styled-components";
import Footer from "../components/Footer";
import backgroundPhoto from "../assets/abgsl2.jpg";
const HomePage = () => {
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
        <div className="home-text">
          <p>
            ABG test d.o.o za tehničko ispitivanje i analizu osnovana je u
            studenom 2017 g. Bavi se ispitivanjima u građevinarstvu i to
            ispitivanjem asfalta, betona i geomehaničkim ispitivanjima. Sastoji
            se od centralnog laboratorija smještenog u Drinskoj 123/a Osijek i
            terenskog laboratorija za ispitivanje asfalta koji se nalazi u
            Nemetinu (pored Osijeka). Djelatnici ABGtest-a su obučeni i stručni,
            a ispitivanja provode umjerenom opremom.
          </p>
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
  .home-text {
    font-family: "Regular";
    color: white;
    margin-top: 5rem;
    margin-bottom: 6rem;
    p {
      margin-left: 4rem;
      margin-right: 4rem;
      text-align: left;
      line-height: 3rem;
      font-size: 1.5rem;
    }
  }
`;

export default HomePage;
