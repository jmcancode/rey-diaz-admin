import React, { useState, useRef } from "react";
import { useAuth } from "../../firebase/context";
import { useHistory } from "react-router-dom";
import { Alert, Form, Card, Image, Row, Col } from "react-bootstrap";
import loginLogo from "../../assets/Rey-Diaz-Logos-Blue.png";

import { motion } from "framer-motion";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(false);
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in. Are you sure you registered?");
    }
    setLoading(false);
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="container"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <Row xs={1} md={1} lg={1} className="text-center">
          <Col sm>
            <Image
              fluid
              src={loginLogo}
              style={{ width: "45%", height: "100%" }}
            />
          </Col>
        </Row>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="container"
      >
        <Row xs={1} md={1} lg={1}>
          <Col>
            <h4 className="text-center text-uppercase text-muted pb-2">
              Rey Diaz law | Administration
            </h4>
          </Col>
        </Row>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <Card
              style={{ borderColor: "transparent" }}
              body
              className="m-3 text-left"
            >
              <Form onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    ref={emailRef}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    ref={passwordRef}
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger btn-sm btn-block"
                  disabled={loading}
                >
                  {loading ? "verifying..." : "Login"}
                </button>
                {error && <Alert variant="danger">{error}</Alert>}
              </Form>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </>
  );
}
