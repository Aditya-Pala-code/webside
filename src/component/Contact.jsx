// Contact.jsx

import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-overlay">

        <div className="contact-container">

          <div className="contact-left">
            <span className="tag">Get In Touch</span>
            <h1>Contact Mind Spark Kids Castle</h1>
            <p>
              We are here to guide parents and support every child with care,
              therapy, and learning opportunities.
            </p>

            <div className="info-box">
              <div className="info-card">
                <span>📞</span>
                <div>
                  <h3>Call Us</h3>
                  <p>8700231213</p>
                </div>
              </div>

              <div className="info-card">
                <span>✉️</span>
                <div>
                  <h3>Email</h3>
                  <p>mindspark@gmail.com</p>
                </div>
              </div>

              <div className="info-card">
                <span>🕒</span>
                <div>
                  <h3>Working Hours</h3>
                  <p>Mon - Sat : 9:00 AM to 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form>
              <h2>Send Message</h2>

              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Phone Number" />
              <textarea rows="5" placeholder="Your Message"></textarea>

              <button type="submit">Send Now</button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}