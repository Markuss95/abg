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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aperiam
            tenetur, saepe distinctio quia repellat nesciunt ducimus ipsam?
            Accusantium aperiam numquam, a ducimus hic ratione praesentium
            dignissimos atque odit neque? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Nihil officia commodi consectetur
            atque minima corporis enim voluptatem itaque laboriosam nemo! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Impedit
            repellendus ipsam culpa mollitia nam non error placeat quod natus
            eius?
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

    p {
      margin-left: 4rem;
      margin-right: 4rem;
      text-align: left;
      line-height: 3rem;
      font-size: 1.6rem;
    }
  }
`;

export default HomePage;
