import React, { useEffect, useState } from "react";
import { Button, Container, Form, Navbar, Card, Nav } from "react-bootstrap";
import axios from "axios";

const IndexHooks = () => {
  const [cards, setCards] = useState([]);
  const [keywords, setKeywords] = useState("");

  const url = "https://newsapi.org/v2/top-headlines?country=id&apiKey=ffdb856bfca6479f8814488e02baab66";
  const url2 = "https://newsapi.org/v2/everything?q=" + keywords + "&apiKey=ffdb856bfca6479f8814488e02baab66";

  useEffect(() => {
    const getAPI = async () => {
      const fetchData = await axios.get(url);
      setCards(fetchData.data.articles);
    };
    getAPI();
  }, []);

  const handleOnChange = (e) => {
    setKeywords(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      const fetchData = await axios.get(url2);
      setCards(fetchData.data.articles);
      console.log(setCards);
    };
    getData();
  }, [keywords]);

  return (
    <div>
      {/* navbar */}
      <Navbar expand="lg" className="fixed-top shadow" style={{ backgroundColor: "#c4fdff" }}>
        <Container fluid>
          <Navbar.Brand href="/" style={{ fontWeight: "bold" }}>
            NavbarNews
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
            <div className="container me-auto">
              <div className="row">
                <div className="col-md-10">
                  <Form className="d-flex">
                    <Form.Control type="search" placeholder="Search" className="me-1" aria-label="Search" onChange={handleOnChange} />
                    {/* <Button variant="outline-info" type="button" size="md">
                      Search
                    </Button> */}
                  </Form>
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* end navbar */}

      {/* card */}
      <div className="container-fluid">
        <div className="row" style={{ marginTop: "60px" }}>
          {cards.map((c, i) => {
            return (
              <div key={c.i} className="col-md-3 my-2">
                <Card>
                  <Card.Img variant="top" src={c.urlToImage} />
                  <Card.Body>
                    <Card.Title>{c.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{c.publishedAt}</Card.Subtitle>
                    <Card.Text>{c.description}</Card.Text>
                    <Button href={c.url} target="_blank" variant="outline-primary">
                      Read More...
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      {/* end card */}
    </div>
  );
};

export default IndexHooks;
