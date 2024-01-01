import { useState } from "react";
import "./Contact.css";
import Footer from "./Footer";
import GoogleMap from "./GoogleMap";
function Contact({ setnav, setpp }) {
  const [formIsOpen, setformIsOpen] = useState(false);
  const toggleForm = () => {
    setformIsOpen(!formIsOpen);
  };

  return (
    <div className="contact">
      <div className="souscontact1">
        {/* <img src="cov.jpg" /> */}
        <img src="https://images.pexels.com/photos/5785015/pexels-photo-5785015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className="contblack">
          <div className="contact-soustiltle">
            <h1>contact</h1>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>{" "}
              / <span>contact</span>
            </p>
          </div>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-map">
          <GoogleMap />
        </div>
        <div className="contact-postion">
          <div className="contact-pos-details">
            <div className="icon-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-stopwatch"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
              </svg>
              <h3>Where we are?</h3>
            </div>
            <div className="contact-location">
              <p>200 12th Ave, New York,</p>
              <p>NY 10001? USA</p>
            </div>
          </div>
          <div className="contact-pos-details">
            <div className="icon-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone-outbound"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
              </svg>
              <h3>Call Us</h3>
            </div>
            <div className="contact-location">
              <p>T +1 222 333 4444</p>
              <p>F +1 222 333 5555</p>
            </div>
          </div>

          <div className="contact-pos-details">
            <div className="icon-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-stopwatch"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
              </svg>
              <h3>Working hours</h3>
            </div>
            <div className="contact-location">
              <p>Mon - Sat: 10 am 6 pm</p>
              <p>Sun- 12pm 2 pm</p>
            </div>
          </div>
        </div>
        <div className="contact-send-email">
          <h2>SEND AN EMAIL</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="send-email-button">
        <button onClick={toggleForm}>
          {formIsOpen ? "Close form" : "Contact us via form"}
        </button>
      </div>

      <div className={`contact-form ${formIsOpen ? 'open' : ''}`}>
        <div className="name-email-inputs">
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="email" />
        </div>
        <div className="subject-message">
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" placeholder="Message"></textarea>
        </div>
        <div className="confirm-send-email-button">
          <button>Send Message</button>
        </div>
      </div>
        </div>
        <div className="contact-other-d">
          <div className="other-detail-div">
            <h5>Sales</h5>
            <p>T +1 222 333 4444</p>
            <p>F +1 222 333 5555</p>
          </div>
          {/* ------------------- */}
          <div className="other-detail-div">
            <h5>Sales</h5>
            <p>T +1 222 333 4444</p>
            <p>F +1 222 333 5555</p>
          </div>
          {/* ------------------- */}
          <div className="other-detail-div">
            <h5>Sales</h5>
            <p>T +1 222 333 4444</p>
            <p>F +1 222 333 5555</p>
          </div>
          {/* ------------------- */}
          <div className="other-detail-div">
            <h5>Sales</h5>
            <p>T +1 222 333 4444</p>
            <p>F +1 222 333 5555</p>
          </div>
          {/* ------------------- */}
          <div className="other-detail-div">
            <h5>Sales</h5>
            <p>T +1 222 333 4444</p>
            <p>F +1 222 333 5555</p>
          </div>
          {/* ------------------- */}
          <div className="other-detail-div">
            <h5>Sales</h5>
            <p>T +1 222 333 4444</p>
            <p>F +1 222 333 5555</p>
          </div>
          {/* ------------------- */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
