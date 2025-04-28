import React from "react";
import { Row, Col } from "react-bootstrap";
import myImg from "../../Assets/org.jpg";
import "../../style.css"; // Make sure this is included if not already

function Github() {
  return (
    <Row className="justify-content-center pb-3">
      <h1 className="project-heading pb-4">
        <strong className="purple">Organizations</strong>
      </h1>
      <Col xs={12} md={8}>
        <ul className="org-list">
          <li className="org-item">
            <img src={myImg} alt="Organization" className="org-image" />
            <div>
              <span className="org-title">Quality Assurance Specialist</span>, SAMAHAN SYSDEV
            </div>
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default Github;
