import styled from "styled-components";
import logo from "../assets/abg_test.png";

const Navbar = () => {
  return (
    <Wrapper>
      <img src={logo} alt="Logo" className="logo" />;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    cursor: pointer;
    position: absolute;
    left: 2rem;
    padding-top: 2rem;
    height: auto;
    width: auto;
    max-width: 300px;
    max-height: 300px;
    z-index: 100;
  }
`;
export default Navbar;
