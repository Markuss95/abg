import styled from "styled-components";
import logo from "../assets/abg_test.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />;
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    cursor: pointer;
    position: absolute;
    left: 2rem;
    top: 2rem;
    height: auto;
    width: auto;
    max-width: 300px;
    max-height: 300px;
    z-index: 100;
  }
`;
export default Navbar;
