import UpperHexagons from "../components/UpperHexagons";
import { useState, useEffect, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
import styled from "styled-components";
import { State } from "../state/reducers";
import { useSelector } from "react-redux";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const LandingPage = () => {
  const counter = useSelector((state: State) => state.navigation);
  const [loading, setLoading] = useState(false);
  const color = "#5D6472 ";
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1950);
  }, []);
  if (loading && counter < 2) {
    return (
      <Drapper>
        <HashLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Drapper>
    );
  } else {
    return (
      <Wrapper>
        <UpperHexagons />
      </Wrapper>
    );
  }
};

const Wrapper = styled.div``;
const Drapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LandingPage;
