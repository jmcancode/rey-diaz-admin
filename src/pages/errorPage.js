import React from "react";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
const ErrorPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 100 }}
      className="container"
    >
      <Row>
        <Col>
          <h4>
            Oh snap! This page doesn't exist or you are not permitted in this
            part of the web.
          </h4>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            className="text-uppercase"
            to="/"
          >
            <FiArrowLeft className="mb-1" color="red" /> Return Home
          </Link>
        </Col>
      </Row>
    </motion.div>
  );
};

export default ErrorPage;
