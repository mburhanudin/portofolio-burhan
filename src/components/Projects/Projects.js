import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/aladinmall.png";
import emotion from "../../Assets/Projects/mpm.png";
import lauretta from "../../Assets/Projects/lauretta.png";
import chatify from "../../Assets/Projects/alva.png";
import suicide from "../../Assets/Projects/bsi.png";
import bitsOfCode from "../../Assets/Projects/sfid.png";
import seller from "../../Assets/Projects/seller.png";
import bos from "../../Assets/Projects/bos.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Alva Auto"
              description="Web for selling electric
              motorbikes with the ALVA
              ONE brand. built using
              NextJS"
              ghLink=""
              demoLink="https://alvaauto.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CMS SO ID"
              description="CMS Web application to view
              vehicle service performance
              analysis"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CMS SFID"
              description="CMS Web application to view
              reports, manage content,
              materials and also SFID
              users."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Aladin Mall"
              description="Develop Backend
              to providedata
              on Front store /
              client and CMS"
              ghLink=""
              demoLink="https://aladinmall.id"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Company Profile BSI"
              description="Website for company profile at BSI"
              ghLink=""
              demoLink="https://www.bsi.co.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="E-Procurement MPM (Still in Develop)"
              description="Website for E-Procurement in MPM Company"
              ghLink=""
              demoLink="https://mpm-local.refactory.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lauretta}
              isBlog={false}
              title="Lauretta"
              description="Website for CMS Property Management"
              ghLink=""
              demoLink="http://35.213.189.89:7000/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seller}
              isBlog={false}
              title="Seller Center"
              description="Website for Seller Aladinmall"
              ghLink=""
              demoLink="https://seller-center.aladinmall.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bos}
              isBlog={false}
              title="BOS Aladinmall"
              description="Website for Back Office Aladinmall"
              ghLink=""
              demoLink="https://bos.aladinmall.id/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
