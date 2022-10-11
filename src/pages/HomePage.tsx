import styled from "styled-components";
import backgroundPhoto from "../assets/abgsl2.jpg";
const HomePage = () => {
  return (
    <Wrapper>
      <div className="image-container">
        <img
          src={backgroundPhoto}
          alt="backgroundPhoto"
          className="homeImage"
        />
      </div>
    </Wrapper>
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
`;

export default HomePage;
