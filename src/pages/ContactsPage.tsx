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
            <span className="contact-us-text">
              Drinska 123a <br />
              Osijek, 31000,
              <br />
              Hrvatska
            </span>
          </p>
        </div>
        <div className="contact-text">
          <div className="gray-line"></div>
          <p>
            <span className="contact-us-title">
              Kontakt <br />
            </span>
            <span className="contact-us-text">
              Telefon: 031/271-741 <br />
              Mobitel: 091/283-1126 <br />
              Fax: 031/271-860
            </span>
          </p>
        </div>
        <div className="contact-text">
          <div className="gray-line"></div>
          <p>
            <span className="contact-us-title">
              Želite surađivati? <br />
            </span>
            <span className="contact-us-text">
              Kontaktirajte nas na: info@abgtest.hr
            </span>
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
    height: 50vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    background-color: #d3d3d3;
    p {
      margin: 0rem;
    }
  }
  .contact-us-title {
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
  }
  .contact-us-text {
    position: absolute;
    font-size: 1.1rem;
    margin-top: 1rem;
    line-height: 4rem;
  }
  .contact-text {
    display: grid;
    grid-template-columns: 1fr 10fr;
    gap: 0.7rem;
    margin-top: 3.3rem;
    color: white;
  }
  .gray-line {
    position: relative;
    margin-left: 1rem;
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
  @media only screen and (max-height: 600px) {
    .contacts-container {
      height: 70vh;
    }
  }
  @media only screen and (max-width: 767px) {
    .contacts-container {
      height: 90vh;
    }
  }
  @media only screen and (max-width: 420px) {
    .gray-line {
      width: 1rem;
    }
  }
`;

export default ContactsPage;
