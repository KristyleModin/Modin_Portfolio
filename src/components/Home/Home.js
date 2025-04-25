import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import homeLogo1 from "../../Assets/home-main_1.svg";
import homeLogo2 from "../../Assets/home-main_2.svg";
import homeLogo3 from "../../Assets/home-main_3.svg";

import Home2 from "./Home2";
import Type from "./Type";

const imageList = [homeLogo1, homeLogo2, homeLogo3];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 

      setTimeout(() => {

        setCurrentImageIndex((prevIndex) =>
          prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true); 
      }, 500); 
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Kristyle Marie G. Modin</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={imageList[currentImageIndex]}
                alt="rotating home"
                className={`img-fluid fade-image ${fade ? "fade-in" : "fade-out"}`}
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
