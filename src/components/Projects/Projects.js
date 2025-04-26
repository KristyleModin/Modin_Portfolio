import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import orv from "../../Assets/Projects/orv.png";
import EmployeeSystem from "../../Assets/Projects/employeesystem.png";
import KapitanSisig from "../../Assets/Projects/kapitansisig.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              description="A digital project inspired by the Korean web novel Omniscient Reader’s Viewpoint, built using HTML, CSS, and JavaScript. This presentation explores its compelling narrative, key characters, and major themes, offering an engaging look into a world where fiction becomes reality."              
              demoLink="https://kristylemodin.github.io/orvKhimmy_AppDev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KapitanSisig}
              isBlog={false}
              title="Kapitan Sisig POS System"
              description="A custom Point of Sale and Inventory System for Kapitan Sisig, built with PHP, HTML, and JavaScript. It automates sales transactions, inventory tracking, and reporting, improving efficiency, reducing errors, and supporting business growth and multi-location expansion."
              ghLink="https://github.com/KristyleModin/KapitanSisig_POS_System"
              demoLink="https://drive.google.com/file/d/11aVU0rQ0rbXuelt7WBrZ6q08v7OoRB7J/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmployeeSystem}
              isBlog={false}
              title="Employee Management System"
              description="A simple Employee Management System built with Python, HTML, and CSS. It supports creating, reading, updating, and deleting (CRUD) employee records through a web-based interface."
              ghLink="https://github.com/KristyleModin/Employee-Management-System"
              demoLink="https://drive.google.com/file/d/1uq4Z4CeRwnRu7ZNf_i-ffbh9ztt8zWVJ/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
