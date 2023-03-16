import React, { useState } from "react";
import "./AdminDash.css";

import { Link } from "react-router-dom";
import { FaUsers, FaClipboardList, FaMoneyBillAlt,FaCar,FaEye } from "react-icons/fa";
import { MdEvent } from 'react-icons/md';
import { BsFillPersonFill } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";
const Dashboard = () => {
  const [expanded, setExpanded] = useState(true);
  const handleToggleSidebar = () => {
    setExpanded(!expanded);
  };
  return (
    <Container fluid>
      <Row>
      <Col
  className={`sidebar p-3 ${
    expanded ? "col-md-3" : "col-md-1"
  } bg-dark`}
>
          <ul className="list-unstyled">
          <div >
            <h2 className="me-3">Heet_Soumekk</h2>
           
          </div>
            <li>
              <Link to="/Customers" className="text-decoration-none">
                <FaUsers className="me-3" />
                Customers
              </Link>
            </li>
            <li>
              <Link to="/AllPending" className="text-decoration-none">
                <FaClipboardList className="me-3" />
                Order
              </Link>
            </li>
            <li>
              <Link to="/Transactions" className="text-decoration-none">
                <FaMoneyBillAlt className="me-3" />
                Transactions
              </Link>
            </li>
            <li>
              <Link to="/Overview" className="text-decoration-none">
                <FaEye className="me-3" />
                Overview
              </Link>
            </li>
            <li>
              <Link to="/Daily" className="text-decoration-none">
                <MdEvent className="me-3" />
                Daily
              </Link>
            </li>
            <li>
              <Link to="/Monthly" className="text-decoration-none">
                <MdEvent className="me-3" />
                Monthly
              </Link>
            </li>
            
            <li>
              <Link to="/CarsForAdmin" className="text-decoration-none">
                <FaCar className="me-3" />
                Cars
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;