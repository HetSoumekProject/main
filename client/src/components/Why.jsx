import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WhyHetSoumek = () => {
  return (
    <section className="why-hetsoumek">
      <Container>
        <Row>
          <Col md={6}>
            <div className="why-hetsoumek__stats">
              <h2>Why HetSoumek</h2>
              <ul>
                <li>
                  <strong>10,000+</strong>
                  <span>Auctions completed</span>
                </li>
                <li>
                  <strong>2,000,000dt+</strong>
                  <span>Value of cars sold</span>
                </li>
                <li>
                  <strong>85%+</strong>
                  <span>Sell-through rate</span>
                </li>
                <li>
                  <strong>305k+</strong>
                  <span>Registered members</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="why-hetsoumek__reviews">
              <h2>Our customers love us</h2>
              <div className="review">
                <span className="heading">
                  <span className="stars"></span>
                  <span className="user">Mehdi Jaouedi</span>
                  <span className="date">Feb 2023</span>
                </span>
                <span className="blurb">The only way to sell your car. I have sold many cars over my life and this was the best by far.</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyHetSoumek;
