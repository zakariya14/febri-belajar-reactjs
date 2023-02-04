import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import axios from "axios";

function WebPortal() {
  const [categories, setCategories] = useState(0);

  useEffect(() => {
    titleWeb();
  }, []);

  const titleWeb = async () => {
    try {
      const url = "https://newsapi.org/v2/top-headlines?" + "country=id&" + "apiKey=e28f168fa9164607bfb2f0a0324d9900";
      const { data } = await axios.get(url);
      //   console.log(data.articles, "responseeee");
      setCategories(data);
    } catch (err) {
      console.log(err, "error titleWeb");
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="fixed-top shadow" style={{ backgroundColor: "#c4fdff" }}>
        <Container>
          <Navbar.Brand href="/" style={{ fontWeight: "bold" }}>
            NavbarBerita
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
            <div className="container me-auto">
              <div className="row">
                <div className="col-md-10">
                  <Form className="d-flex">
                    <Form.Control type="search" placeholder="Search" className="me-1" aria-label="Search" />
                    <Button variant="outline-info" size="md">
                      Search
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* cards */}
      <div className="container-fluid">
        <div className="row" style={{ marginTop: "60px" }}>
          <div className="col-md-3 my-2">
            <Card>
              <Card.Img variant="top" src="https://rsinewsupdate.files.wordpress.com/2017/01/smartphone-xiaomi-jpg.jpeg" />
              <Card.Body>
                <Card.Title>title</Card.Title>
                <Card.Title>
                  {categories.map((ctr, idx) => {
                    console.log(categories);
                    return <div key={idx}>{ctr}</div>;
                  })}
                </Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <div className="d-grid gap-2">
                  <Button variant="outline-info" size="md">
                    Read more...
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* End cards */}
    </div>
  );
}

export default WebPortal;
