import styled from "styled-components";
import backgroundPhoto from "../assets/EMR04531 (1).jpg";
const HomePage = () => {
  return (
    <Wrapper>
      <div className="main-container">
        <p>Hello</p>
        <div className="img-container">
          <img src={backgroundPhoto} alt="backgroundPhoto" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: -10%;
  .img-container {
    max-width: 100%;
  }
`;

export default HomePage;
