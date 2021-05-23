import React, { useState } from "react";
import { Row, Col, Card, Modal, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import TopNav from "../components/navigation/navBar";
import { db } from "../firebase/config";

function MyVerticallyCenteredModal(props) {
  const [files, setFiles] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loader, setLoader] = useState("");

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    await db
      .collection("dyk")
      .add({
        files: files,
        title: title,
        content: content,
        createdAt: new Date().toDateString(),
      })
      .then(() => {
        setLoader(false);
        alert("Did you know...you successfully uploaded to the data base!!");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFiles("");
    setTitle("");
    setContent("");
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Admin Post: Did you know?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleBlogSubmit}>
          <Form.Group>
            <Form.File
              value={files}
              onChange={(e) => setFiles(e.target.value)}
              id="upload"
              label="Add your photo"
              className="pb-2"
            />
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter blog title"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              row={4}
              type="text"
              placeholder="Lorem Ipsum"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Button
            style={{
              backgroundColor: "#bfa36f",
              borderColor: "transparent",
            }}
            onClick={props.onHide}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: loader ? "#c02626" : "#bfa36f",
              borderColor: "transparent",
            }}
            type="submit"
            className="ml-2"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function MyVerticallyCenteredModalTwo(props) {
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [loading, setLoading] = useState("");

  const handleWhatsNew = async (e) => {
    e.preventDefault();
    setLoading(true);

    await db
      .collection("whatsNew")
      .add({
        blogTitle: blogTitle,
        blogContent: blogContent,
        createdAt: new Date().toDateString(),
      })
      .then(() => {
        setLoading(false);
        alert("Upload successful! You need a 2 hour lunch now! ");
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });

    setBlogTitle("");
    setBlogContent("");
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Admin Post: Whats new?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleWhatsNew}>
          <Form.Group>
            <Form.File id="upload" label="Add your photo" className="pb-2" />
            <Form.Control
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              type="text"
              placeholder="Enter blog title"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              row={4}
              type="text"
              placeholder="Lorem Ipsum"
              value={blogContent}
              onChange={(e) => setBlogContent(e.target.value)}
            />
          </Form.Group>
          <Button
            style={{
              backgroundColor: "#bfa36f",
              borderColor: "transparent",
            }}
            onClick={props.onHide}
          >
            Cancel
          </Button>
          <Button
            className="ml-2"
            style={{
              backgroundColor: loading ? "#c02626" : "#bfa36f",
              borderColor: "transparent",
            }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
function MyVerticallyCenteredModalThree(props) {
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [loading, setLoading] = useState("");

  const handleFreeInfo = async (e) => {
    e.preventDefault();
    setLoading(true);

    await db
      .collection("freeInformation")
      .add({
        blogTitle: blogTitle,
        blogContent: blogContent,
        createdAt: new Date().toDateString(),
      })
      .then(() => {
        setLoading(false);
        alert("Successfully upload! Great job, take the day off! ");
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });

    setBlogTitle("");
    setBlogContent("");
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Admin Post: Free Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFreeInfo}>
          <Form.Group>
            <Form.File id="upload" label="Add your photo" className="pb-2" />
            <Form.Control
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              type="text"
              placeholder="Enter blog title"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              row={4}
              type="text"
              placeholder="Lorem Ipsum"
              value={blogContent}
              onChange={(e) => setBlogContent(e.target.value)}
            />
          </Form.Group>
          <Button
            style={{
              backgroundColor: "#bfa36f",
              borderColor: "transparent",
            }}
            onClick={props.onHide}
          >
            Cancel
          </Button>
          <Button
            className="ml-2"
            style={{
              backgroundColor: loading ? "#c02626" : "#bfa36f",
              borderColor: "transparent",
            }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default function AdminDash() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowTwo, setModalShowTwo] = useState(false);
  const [modalShowThree, setModalShowThree] = useState(false);

  return (
    <React.Fragment>
      <TopNav />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        fluid
        className=" container h-100 mt-1 mb-3"
      >
        <Row xs={1} md={1} lg={1}>
          <Col>
            <h5 className="text-left">Hey Editor, </h5>
            <p className="text-left">
              On this page you can control the three blog spaces on the
              application. Press the "add post" button and simply select a
              photo, add a title, paste your content and submit.
            </p>
          </Col>
        </Row>
        <Row className="pt-3" xs={1} md={3} lg={3}>
          <Col className="mb-1">
            <Card
              style={{
                height: "150px",
                borderRadius: "15px",
                borderColor: "#bfa36f",
              }}
            >
              <Card.Body className=" text-center text-uppercase">
                <p>Did you Know?</p>
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "#bfa36f",
                    borderColor: "transparent",
                  }}
                  variant="primary"
                  onClick={() => setModalShow(true)}
                >
                  <FiPlus /> Add a post
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-1">
            <Card
              style={{
                height: "150px",
                borderRadius: "15px",
                borderColor: "#bfa36f",
              }}
            >
              <Card.Body className=" text-center text-uppercase">
                <p>Whats New</p>
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "#bfa36f",
                    borderColor: "transparent",
                  }}
                  variant="primary"
                  onClick={() => setModalShowTwo(true)}
                >
                  <FiPlus /> Add a post
                </Button>

                <MyVerticallyCenteredModalTwo
                  show={modalShowTwo}
                  onHide={() => setModalShowTwo(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-1">
            <Card
              style={{
                height: "150px",
                borderRadius: "15px",
                borderColor: "#bfa36f",
              }}
            >
              <Card.Body className="text-center text-uppercase">
                <p>Free Information</p>
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "#bfa36f",
                    borderColor: "transparent",
                  }}
                  variant="primary"
                  onClick={() => setModalShowThree(true)}
                >
                  <FiPlus /> Add a post
                </Button>

                <MyVerticallyCenteredModalThree
                  show={modalShowThree}
                  onHide={() => setModalShowThree(false)}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="w-100" xs={1} md={1} lg={1}>
          <Col className="h-100">
            <p className="text-muted text-center mt-3" style={{ fontSize: 10 }}>
              San Antonio Website Design by
              <a
                target="__blank"
                href="https://www.j12designs.com"
                rel="noreferr noopener"
                style={{
                  textDecoration: "none",
                  color: "#2f2f2f",
                  paddingLeft: 3,
                }}
              >
                J12 Designs
              </a>{" "}
            </p>
          </Col>
        </Row>
      </motion.div>
    </React.Fragment>
  );
}
