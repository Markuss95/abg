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
            <div className="white-line"></div>
            <div>
              <p>
                ABG test d.o.o za tehničko ispitivanje i analizu osnovana je u
                studenom 2017 g. Bavi se ispitivanjima u građevinarstvu i to
                ispitivanjem asfalta, betona i geomehaničkim ispitivanjima.
                Sastoji se od centralnog laboratorija smještenog u Drinskoj
                123/a Osijek i terenskog laboratorija za ispitivanje asfalta
                koji se nalazi u Nemetinu (pored Osijeka). Djelatnici ABGtest-a
                su obučeni i stručni, a ispitivanja provode umjerenom opremom.
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
    /* position: absolute;
    object-fit: cover;
    width: 50rem;
    height: 32rem; */
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
      font-size: 1.2rem;
    }
  }
  .second-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .white-line {
    position: relative;
    margin-top: 2.5rem;
    margin-left: 2rem;
    height: 0.2rem;
    width: 1.8rem;
    background-color: #5d6472;
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
`;

export default HomePage;
