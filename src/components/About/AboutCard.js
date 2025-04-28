import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Kristyle Marie Modin</span>, a passionate and driven 
            <span className="purple"> Computer Science student at Ateneo de Davao University (AdDU) </span> 
            with a deep appreciation for both technology and creativity. I approach every opportunity with curiosity and dedication—
            whether it’s solving technical problems, contributing to open-source projects, or refining software through quality assurance.
            I am constantly exploring ways to grow as a developer and a critical thinker, while also staying connected to my creative side 
            through various hobbies and community involvement.
            <br />
            <br />
            Outside of tech, here are a few things I enjoy doing in my spare time:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Novels and Manga/Manhwa
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Strategy and Story-Based Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing and Sketching Concepts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Those who keep trying without giving up are the ones who succeed."
          </p>
          <footer className="blockquote-footer">Kim Seokjin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
