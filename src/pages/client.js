import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { db } from "../firebase/config";
import TopNav from "../components/navigation/navBar";

const { SearchBar } = Search;

const expandRow = {
  renderer: (row) => <div></div>,
};

export default function ClientPage() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [tel, setTel] = useState("");
  const [loader, setLoader] = useState("");
  const [clients, setClients] = useState("");

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    await db
      .collection("client")
      .add({
        email: email,
        fullName: fullName,
        address: address,
        addressTwo: addressTwo,
        city: city,
        tel: tel,
        state: state,
        zip: zip,
        createdAt: new Date().toDateString(),
      })
      .then(() => {
        setLoader(false);
        alert("You've successfully created a client account! ");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setEmail("");

    setFullName("");
    setAddress("");
    setCity("");
    setTel("");
    setState("");
    setZip("");
  };

  useEffect(() => {
    db.collection("client")
      .orderBy("createdAt", "desc")
      .onSnapshot({ includeMetadataChanges: true }, (snapshot) =>
        setClients(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      setLoader(false);
    };
  }, []);

  const products = [];

  const columns = [
    {
      dataField: "id",
      text: "Client id",
      headerAlign: "left",
    },
    {
      dataField: "name",
      text: "Client Name",
      headerAlign: (column, colIndex) => "left",
    },
    {
      dataField: "email",
      text: "Email Address",
      headerAlign: "left",
    },
    {
      dataField: "phone",
      text: "Phone Number",
      headerAlign: "left",
    },
    {
      dataField: "location",
      text: "Location",
      headerAlign: "left",
    },
  ];
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
            <h5 className="text-left">Clients</h5>
            <p className="text-left">
              On this page you can add new clients to the "client" database.
              This is separate from guests, and prospects.
            </p>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <Card
              style={{ borderColor: "#bfa36f", borderRadius: "15px" }}
              className="d-none d-sm-block	d-sm-none d-md-block"
            >
              <Card.Body className="text-uppercase">
                <h5>Add a new client</h5>
                <hr />
                <Form onSubmit={handleClientSubmit}>
                  <Row xs={3} md={3} lg={3}>
                    <Col>
                      <Form.Control
                        type={fullName}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full name"
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                        placeholder="email@email.com"
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        type="tel"
                        required
                        placeholder="2101231123"
                      />
                    </Col>
                  </Row>
                  <Row className="pt-2" xs={1} md={1} lg={1} s>
                    <Col>
                      <Form.Control
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        text="text"
                        placeholder="Address"
                      />
                    </Col>
                    <Col className="pt-2">
                      <Form.Control
                        vale={addressTwo}
                        onChange={(e) => setAddressTwo(e.target.value)}
                        text="text"
                        placeholder="Apt, FL, Bldg #"
                      />
                    </Col>
                  </Row>
                  <Row xs={3} md={3} lg={3} className="pt-2">
                    <Col>
                      <Form.Control
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        as="select"
                      >
                        <option>Choose one...</option>
                        <option>San Antonio</option>
                        <option>Austin</option>
                        <option>Edinburg</option>
                        <option>Laredo</option>
                      </Form.Control>
                    </Col>
                    <Col>
                      <Form.Control
                        required
                        as="select"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      >
                        <option>Choose one...</option>
                        <option>Texas</option>
                      </Form.Control>
                    </Col>
                    <Col>
                      <Form.Control
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required
                        placeholder="Zip"
                      />
                    </Col>
                  </Row>
                  <Button
                    className="mt-2"
                    size="sm"
                    block
                    style={{
                      backgroundColor: loader ? "#c02626" : "#bfa36f",
                      borderColor: "transparent",
                    }}
                    type="sumbit"
                  >
                    {loader ? "Loading... " : "submit"}
                  </Button>
                </Form>
                <ToolkitProvider
                  keyField="id"
                  data={products}
                  columns={columns}
                  search={true}
                >
                  {(props) => (
                    <div>
                      <hr />
                      <SearchBar
                        style={{
                          borderRightColor: "transparent",
                          borderTopColor: "transparent",
                          borderLeftColor: "transparent",
                          backgroundColor: "transparent",
                        }}
                        {...props.searchProps}
                      />

                      <BootstrapTable
                        wrapperClasses="table-responsive"
                        striped
                        bordered={false}
                        expandRow={expandRow}
                        {...props.baseProps}
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </React.Fragment>
  );
}
