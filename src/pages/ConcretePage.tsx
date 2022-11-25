import styled from "styled-components";
import concreteImage from "../assets/beton_slika-min - Copy.jpg";

const ConcretePage = () => {
  return (
    <Wrapper>
      <img
        src={concreteImage}
        alt="backgroundPhoto"
        className="concreteImage"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Regular";
  line-height: 0;
  .concreteImage {
    width: 100vw;
    height: 100vh;
    position: relative;
    object-fit: cover;
  }
`;
export default ConcretePage;
