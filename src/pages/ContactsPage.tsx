import styled from "styled-components";
import Footer from "../components/Footer";
import contactsPhoto from "../assets/asd.jpg";
const ContactsPage = () => {
  return (
    <>
      <Wrapper>
        <div className="image-container">
          <img
            src={contactsPhoto}
            alt="backgroundPhoto"
            className="homeImage"
          />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  .image-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    img {
      min-width: 100vw;
      object-fit: cover;
    }
  }
`;

export default ContactsPage;
