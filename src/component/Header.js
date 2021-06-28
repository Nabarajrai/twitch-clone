import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import AuthGoogle from "./AuthGoogle";
import "../style/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Container>
        <Row className="Row">
          <Col md="9" sm="6" xs="4" className="Col">
            <Link to="/" className="Link">
              Streamer
            </Link>
          </Col>
          <Col className="Col" md="1" sm="2" xs="4">
            <Link to="/" className="Link">
              Streams
            </Link>
          </Col>
          <Col sm="4" md="2" xs="4">
            <AuthGoogle />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
