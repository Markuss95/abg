import styled from "styled-components";
import backgroundPhoto from "../assets/abgsl1.jpg";
const HomePage = () => {
  return (
    <Wrapper>
      <img src={backgroundPhoto} alt="backgroundPhoto" className="homeImage" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  .homeImage {
    width: 100vw;
    height: 100vh;
    position: relative;
    object-fit: cover;
  }
`;

export default HomePage;
