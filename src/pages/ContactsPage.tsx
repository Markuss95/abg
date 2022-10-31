import styled from "styled-components";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Footer from "../components/Footer";
import contactsPhoto from "../assets/asd.jpg";
const ContactsPage = () => {
  return (
    <>
      <ContactsWrapper>
        <div className="image-container">
          <img
            src={contactsPhoto}
            alt="backgroundPhoto"
            className="homeImage"
          />
        </div>
        <div className="contacts-container">
          <p>{process.env.NODE_ENV}</p>
          <p>{process.env.REACT_APP_NOT_SECRET_CODE}</p>
          <p>test</p>
          {/* <Wrapper></Wrapper> */}
        </div>
      </ContactsWrapper>
      <Footer />
    </>
  );
};

const ContactsWrapper = styled.div`
  .contacts-container {
    height: 60vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #d3d3d3;
  }
  .image-container {
    position: relative;
    width: 100vw;
    height: 60vw;
    overflow: hidden;
    img {
      min-width: 100vw;
      object-fit: cover;
    }
  }
`;

export default ContactsPage;
