import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <header>
        <p>Edit and save to reload.</p>
        <div className="hexagon">
          <div className="first-icon">Ikona</div>
        </div>
      </header>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font-family: "Regular";
  .hexagon {
    position: relative;
    cursor: pointer;
    margin: 1em auto;
    width: 7em;
    height: 11.5em;
    border-radius: 1em/0.5em;
    background: #708090;
    transition: opacity 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
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
  .first-icon {
    position: absolute;
    z-index: 1;
  }
`;
export default App;
