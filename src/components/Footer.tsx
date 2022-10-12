import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="upper-footer-part">
        ABG Test • Drinska 123a, 31000 Osijek • Tel. +385 (0)31 27 17 41 •
        info@abgtest.hr
      </div>
      <div className="lower-footer-part">
        ABG Test © {new Date().getFullYear()} Sva prava pridržana
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Bold";
  position: absolute;
  width: 100%;
  background-color: white;
  padding-top: 2rem;
  padding-bottom: 2rem;
  .upper-footer-part {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1.5rem;
  }
  .lower-footer-part {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Footer;
