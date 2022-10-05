import UpperHexagons from "../components/UpperHexagons";
import LowerHexagons from "../components/LowerHexagons";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <Wrapper>
      <UpperHexagons />
      <LowerHexagons />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default LandingPage;
