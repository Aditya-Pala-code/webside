import "./about.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">

        <div className="about-box">
          <h1>About Mind Spark Kids Castle</h1>
          <p>
            A nurturing learning space for children with autism where every
            child sparkles. We focus on confidence, independence and skill
            development through personalized care.
          </p>
        </div>

        <div className="about-grid">

          <div className="card">
            <h2>Our Mission</h2>
            <p>
              Helping children grow with structured learning, therapy and love.
            </p>
          </div>

          <div className="card">
            <h2>Experienced Team</h2>
            <p>
              Dedicated educators, therapists and caring support staff.
            </p>
          </div>

          <div className="card">
            <h2>Safe Environment</h2>
            <p>
              Secure, child-friendly and positive atmosphere.
            </p>
          </div>

          <div className="card">
            <h2>Personal Attention</h2>
            <p>
              Limited seats for better focus on every child.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}