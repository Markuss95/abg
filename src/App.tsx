import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <div className="first-container">
        <div className="hexagon">
          <div className="text-inside">Ikona</div>
        </div>
      </div>
      <div>
        <div className="hexagon hexagon-second">
          <div className="text-inside">Ikona dva</div>
        </div>
      </div>
      <div>
        <div className="hexagon hexagon-third">
          <div className="text-inside">Ikona tri</div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font-family: "Regular";
  position: absolute;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .first-container {
    margin-left: 2rem;
  }
  .hexagon {
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
  .hexagon-second {
    margin-left: 6rem;
  }
  .hexagon-third {
    margin-left: 6rem;
  }
  .hexagon:before,
  .hexagon:after {
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: inherit;
    content: "";
  }

  .hexagon:before {
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg);
  }

  .hexagon:after {
    -webkit-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }
  .text-inside {
    color: white;
    position: absolute;
    z-index: 1;
  }

  @media only screen and (max-width: 942px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    width: 60%;
    margin-left: 10%;
    .first-container {
      margin-left: 0rem;
    }
    .hexagon {
      margin-bottom: 1rem;
      margin-left: 10rem;
    }
  }
  @media only screen and (max-width: 642px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    width: 60%;
    .first-container {
      margin-left: 0rem;
    }
    .hexagon {
      margin-bottom: 1rem;
      margin-left: 10rem;
    }
  }
`;
export default App;
