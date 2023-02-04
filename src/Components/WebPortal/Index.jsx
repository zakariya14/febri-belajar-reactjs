import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import axios from "axios";
// import qs from "querystring";
// import NavDropdown from "react-bootstrap/NavDropdown";

const url = "https://newsapi.org/v2/top-headlines?country=id&apiKey=e28f168fa9164607bfb2f0a0324d9900";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: [],
      response: "",
      display: "none",
      search: "",
      dataSearch: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(url).then((res) => {
      this.setState({
        article: res.data.articles,
      });
    });
  }

  handleChange(e) {
    this.setState({
      search: e.target.value,
    });
    // console.log(e.target.value);
  }
  handleSubmit(e) {
    const url2 = "https://newsapi.org/v2/everything?q=" + this.state.search + "&apiKey=e28f168fa9164607bfb2f0a0324d9900";
    e.preventDefault();
    console.log(url2);
    axios.get(url2).then((res) => {
      this.setState({
        article: res.data.articles,
      });
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="lg" className="fixed-top shadow" style={{ backgroundColor: "#c4fdff" }}>
          <Container>
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
                      <Form.Control onChange={this.handleChange} type="search" placeholder="Search" className="me-1" aria-label="Search" />
                      <Button onClick={this.handleSubmit} variant="outline-info" type="button" size="md">
                        Search
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="container-fluid">
          <div className="row" style={{ marginTop: "60px" }}>
            {this.state.article.map((art, id) => {
              // console.log(art);
              return (
                <div className="col-md-3 my-2">
                  <Card key={id}>
                    <Card.Img variant="top" src={art.urlToImage} />
                    <Card.Body>
                      <Card.Title>{art.title}</Card.Title>
                      <Card.Text className="mb-2 text-muted">{art.publishedAt}</Card.Text>
                      <Card.Text>{art.description}</Card.Text>
                      <div className="d-grid gap-2">
                        <Button href={art.url} target="_blank" variant="outline-info" size="md">
                          Read more...
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
