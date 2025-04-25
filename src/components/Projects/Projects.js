import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import orv from "../../Assets/Projects/orv.png";
import suicide from "../../Assets/Projects/suicide.png";
import KapitanSisig from "../../Assets/Projects/kapitansisig.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orv}
              isBlog={false}
              title="Omniscient Reader's Viewpoint"
              description="A digital project inspired by the Korean web novel 'Omniscient Reader’s Viewpoint.' This presentation explores its compelling narrative, key characters, and major themes, offering an engaging look into a world where fiction becomes reality."              
              demoLink="https://kristylemodin.github.io/orvKhimmy_AppDev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KapitanSisig}
              isBlog={false}
              title="Kapitan Sisig POS System"
              description="A custom-built Point of Sale and Inventory Management System designed for Kapitan Sisig, a small food business. This system streamlines daily operations by automating sales transactions, inventory tracking, and reporting. It enhances operational efficiency, minimizes manual errors, and supports business scalability by accommodating growing order volumes and potential multi-location expansion."
              ghLink="https://github.com/KristyleModin/KapitanSisig_POS_System"
              demoLink="https://drive.google.com/file/d/1XemUd8KnZWcQtzZ6sxRRh7GbWiZNCIx_/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
