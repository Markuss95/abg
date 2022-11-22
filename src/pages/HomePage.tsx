import styled from "styled-components";
import Footer from "../components/Footer";
import backgroundPhoto from "../assets/abgsl2.jpg";
import homePhoto from "../assets/Testiranjeasfalta.jpg";
const HomePage = () => {
  // const [showFooter, setShowFooter] = useState<boolean>(true);
  // useEffect(() => {
  //   if (window.innerWidth < 943) {
  //     setShowFooter(false);
  //   }
  // });

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
        <div className="home-container">
          <div className="home-text">
            <div className="colored-line"></div>
            <div>
              <p>
                ABG test d.o.o. za tehničko ispitivanje i analizu osnovano je u
                studenom 2017 g. Bavi se ispitivanjima u građevinarstvu i to
                ispitivanjem asfalta, bitumenskog veziva, betona i geomehaničkim
                ispitivanjima.
              </p>
            </div>
          </div>
          <div className="second-img-container">
            <img src={homePhoto} alt="homePhoto" className="home-second-img" />
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
  .home-container {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 2rem;
  }

  .homeImage {
    width: 100vw;
    height: 100vh;
    position: relative;
    object-fit: cover;
  }
  .home-second-img {
    flex-shrink: 0.7;
    min-width: 100%;
    min-height: 60%;
  }
  .home-text {
    font-family: "Regular";
    color: white;
    margin-top: 6rem;
    margin-bottom: 7rem;
    display: grid;
    grid-template-columns: 1fr 10fr;
    p {
      text-align: left;
      line-height: 3rem;
      font-size: 1.4rem;
    }
  }
  .second-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  @media only screen and (max-width: 942px) {
    .home-container {
      grid-template-columns: 1fr;
    }
    .home-text {
      p {
        margin-left: 2rem;
        margin-right: 2rem;
      }
    }
  }
  @media only screen and (max-width: 642px) {
    .home-text {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  }
`;

export default HomePage;
