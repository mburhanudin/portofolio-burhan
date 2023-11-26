import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Burhanudin </span>
            from <span className="purple"> Sleman, Yogyakarta.</span>
            <br />
            I am currently employed as a software engineer at Refactory.
            <br />
            As a highly skilled and results-driven Website Developer, I am excited to express my interest in the Website Developer. With a robust proficiency in React.Js, Next.Js, Vue.Js, and Nuxt.Js, 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Futsal
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#5f83f8" }}>
            "trying to do something useful for other people!"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Burhanudin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
