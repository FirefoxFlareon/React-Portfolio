import "../../App.css";
import PortfolioPic from "../../assets/Portfolio Default.jpg";

export default function About() {
  return (
    <div className="about-container">
      <img src={PortfolioPic} alt="Tanner Shank" className="about-image" />
      <h1>About Me</h1>
      <p>
        My name is Tanner Shank, I am an aspiring full stack web developer coming out of the University of Minnesota's bootcamp program!
      </p>
      <p>
        I'm looking forward to using my years in hospitality, as well as my new knowledge of web development to become a great team asset!
      </p>
    </div>
  );
}