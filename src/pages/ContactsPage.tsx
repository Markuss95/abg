import styled from "styled-components";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Footer from "../components/Footer";
import contactsPhoto from "../assets/asd.jpg";
const ContactsPage = () => (
  <>
    <ContactsWrapper>
      <div className="image-container">
        <img src={contactsPhoto} alt="backgroundPhoto" className="homeImage" />
      </div>
      <div className="contacts-container">
        <div className="contact-text">
          <div className="gray-line"></div>
          <p>
            <span className="contact-us-title">
              Opće informacije
              <br />
            </span>
            <span className="contact-us-text">Malo teksta jos</span>
          </p>
        </div>
        <div className="contact-text">
          <div className="gray-line"></div>
          <p>
            <span className="contact-us-title">Kontakt</span>
          </p>
        </div>
        <div className="contact-text">
          <div className="gray-line"></div>
          <p>
            <span className="contact-us-title">Želite surađivati?</span>
          </p>
        </div>
      </div>
    </ContactsWrapper>
    <Footer />
  </>
);

const ContactsWrapper = styled.div`
  .contacts-container {
    position: relative;
    height: 55vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    background-color: #d3d3d3;
    p {
      margin: 0rem;
    }
  }
  .contact-us-title {
    font-size: 1.5rem;
  }
  .contact-us-text {
    position: absolute;
    margin-top: 1rem;
  }
  .contact-text {
    display: grid;
    grid-template-columns: 1fr 10fr;
    margin-top: 2.5rem;
  }
  .gray-line {
    position: relative;
    margin-top: 0.9rem;
    height: 0.2rem;
    width: 1.8rem;
    background-color: #5d6472;
  }
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
