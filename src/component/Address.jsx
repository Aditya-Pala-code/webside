// Address.jsx

import "./Address.css";

export default function Address() {
  return (
    <div className="address-page">

      <div className="address-container">

        <div className="address-left">
          <span className="small-tag">Visit Us</span>
          <h1>Our Location</h1>

          <p>
            Mind Spark Kids Castle is located in East Delhi with a peaceful,
            safe and child-friendly environment.
          </p>

          <div className="location-card">
            <h3>📍 Full Address</h3>
            <p>
              Mind Spark Kids Castle <br />
              East Delhi, New Delhi, India
            </p>
          </div>

          <div className="location-card">
            <h3>📞 Phone</h3>
            <p>8700231213</p>
          </div>

          <div className="location-card">
            <h3>🚗 Easy To Reach</h3>
            <p>Metro, Cab & Local Transport Available</p>
          </div>
        </div>

        <div className="address-right">
          <div className="map-box">
            <h2>Google Map</h2>
            <iframe
              title="map"
              src="https://www.google.com/maps?q=East%20Delhi&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

    </div>
  );
}