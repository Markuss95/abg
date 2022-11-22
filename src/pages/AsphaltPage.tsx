import styled from "styled-components";
import infratestPhoto from "../assets/infratest.jpg";
const AsphaltPage = () => {
  return (
    <Wrapper>
      <div className="image-container">
        <img
          src={infratestPhoto}
          alt="backgroundPhoto"
          className="infratestImage"
        />
      </div>
      <div>test</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .infratestImage {
    width: 100vw;
    height: 100vh;
    position: relative;
    object-fit: cover;
  }
`;

export default AsphaltPage;
