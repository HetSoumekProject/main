import React, { useState } from "react";
import "./AdminDash.css";
import Customers from "./Customers";
import AllPending from "./AllPending";
import Monthly from "./Monthly";
import { Link } from "react-router-dom";
import { FaUsers, FaClipboardList, FaMoneyBillAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMenuFold } from "react-icons/ai";
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
          {/* Sidebar Header */}
          <div className="d-flex align-items-center mb-3">
            <h2 className="text-primary mb-0">Auctions</h2>
            <button
              className="btn btn-link text-decoration-none ms-auto"
              onClick={handleToggleSidebar}
            >
              <AiOutlineMenuFold size={24} />
            </button>
          </div>
          {/* Sidebar Menu */}
          <ul className="list-unstyled">
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
                <FaMoneyBillAlt className="me-3" />
                Overview
              </Link>
            </li>
            <li>
              <Link to="/Daily" className="text-decoration-none">
                <FaMoneyBillAlt className="me-3" />
                Daily
              </Link>
            </li>
            <li>
              <Link to="/Monthly" className="text-decoration-none">
                <FaMoneyBillAlt className="me-3" />
                Monthly
              </Link>
            </li>
            <li>
              <Link to="/AdminSet" className="text-decoration-none">
                <BsFillPersonFill className="me-3" />
                Admin
              </Link>
            </li>
          </ul>
        </Col>
      
      </Row>
    </Container>
  
  );
};

export default Dashboard;
