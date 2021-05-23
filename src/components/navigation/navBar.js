import React, { useState } from "react";
import logo from "../../assets/Rey-Diaz-Logos-Blue.png";
import { Image, Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../firebase/context";

export default function TopNav() {
  const history = useHistory();
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState("");

  async function handleLogout(e) {
    e.preventDefault();
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        style={{ backgroundColor: "#bfa36f" }}
        className="w-100 d-flex"
        variant="light"
      >
        <Navbar.Brand as={Link} to="/">
          <Image src={logo} width={190} height={100} fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Editor
            </Nav.Link>
            <Nav.Link as={Link} to="/client">
              Client
            </Nav.Link>
            <Nav.Link as={Link} to="/schedule">
              Schedule
            </Nav.Link>
          </Nav>
          <Nav>
            {!currentUser && (
              <Nav.Link as={Link} to="/login" className="text-muted">
                Login
              </Nav.Link>
            )}
            {currentUser && (
              <Nav.Link
                as={Link}
                to="/"
                className="text-muted"
                onClick={handleLogout}
              >
                Logout
              </Nav.Link>
            )}
            {error}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
