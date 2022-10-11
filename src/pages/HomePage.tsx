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
      <div className="home-text">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          molestiae possimus autem similique tempore vel nobis quia ducimus
          earum in, aliquid, necessitatibus iste temporibus ad blanditiis?
          Ratione esse quo mollitia! test te
        </p>
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
  .home-text {
    font-family: "Regular";

    color: white;
    height: 20vh;
  }
`;

export default HomePage;
