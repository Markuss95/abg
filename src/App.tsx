import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <header>
        <p>Edit and save to reload.</p>
        <div className="hexagon"></div>
      </header>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font-family: "Regular";
  .hexagon {
    position: relative;
    margin: 1em auto;
    width: 10em;
    height: 17.32em;
    border-radius: 1em/0.5em;
    background: orange;
    transition: opacity 0.5s;
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
`;
export default App;
