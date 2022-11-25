import styled from "styled-components";
import concreteImage from "../assets/beton_slika.jpg";

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
  .concreteImage {
    width: 100vw;
    height: 100vh;
    position: relative;
    object-fit: cover;
  }
`;
export default ConcretePage;
