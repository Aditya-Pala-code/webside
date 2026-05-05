// import React from "react";
import "./MainContent.css";
import childImg from "../assets/child.png"; // use your image

export default function MainContent() {
  return (
    <div className="main">

      {/* TOP BOXES */}
      <div className="top-boxes">
        <div className="box blue">
          <h3>LONG</h3>
          <p>5-6 Hour Session Daily</p>
        </div>

        <div className="box orange">
          <h3>ONLY 10 SEATS</h3>
          <p>Limited Enrollment</p>
        </div>
      </div>

      <div className="content">

        {/* LEFT SERVICES */}
        <div className="services">
          <h2>Our Services ❤️</h2>

          <ul>
            <li>Behaviour Modification</li>
            <li>Social Skills Development</li>
            <li>ADL (Daily Living)</li>
            <li>Time Management</li>
            <li>Speech & Language Therapy</li>
            <li>Education Support</li>
            <li>Sensory Awareness</li>
            <li>Skill Development</li>
            <li>RDI Based Therapy</li>
          </ul>
        </div>

        {/* CENTER IMAGE */}
        <div className="center">
          <img src={childImg} alt="child" />

          <div className="highlight">
            <p>
              We don’t just teach skills, <br />
              <span>We build confidence & bright futures!</span>
            </p>
          </div>
        </div>

        {/* RIGHT INFO */}
        <div className="info">
          <h2>
            A Nurturing Space for Children with <span>Autism</span>
          </h2>

          <p>
            Helping children grow, learn and shine in their own unique way.
          </p>

          <div className="features">
            <div className="card">Safe Environment</div>
            <div className="card">Experienced Team</div>
            <div className="card">Individual Focus</div>
            <div className="card">Holistic Development</div>
          </div>
        </div>

      </div>

    </div>
  );
}