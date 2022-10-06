import styled from "styled-components";

const LowerHexagons = () => {
  return (
    <Wrapper>
      <div className="first-container-v2">
        <div className="lower-hexagon">
          <div className="lower-text-inside">Ikona</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Regular";
  position: absolute;
  min-height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 67%;
  padding-top: 12vh;
  /* padding-bottom: 27vh; */
  .first-container-v2 {
    margin-right: 11rem;
  }
  .lower-hexagon {
    position: relative;
    cursor: pointer;
    margin-left: 6em;
    width: 7em;
    height: 11.5em;
    border-radius: 1em/0.5em;
    background: #696969;
    transition: opacity 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30vw;
  }
  .lower-hexagon:before,
  .lower-hexagon:after {
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: inherit;
    content: "";
  }

  .lower-hexagon:before {
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg);
  }

  .lower-hexagon:after {
    -webkit-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }
  .lower-text-inside {
    color: white;
    position: absolute;
    z-index: 1;
  }
`;
export default LowerHexagons;
