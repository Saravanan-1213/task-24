import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
function App() {
  return (
    <div className="App">
      <BasicExample />
      <Header />
      <Display />
      <Display1 />
      <Footer />
    </div>
  );
}

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                All Products
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Popular Items
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                New Arrival
              </NavDropdown.Item>
            </NavDropdown>
            <Button className="cart-button" variant="outline-dark">
              Cart 0
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Header() {
  return (
    <Container className="container-header">
      <h1 className="heading1"> Shop in style</h1>
      <h6 className="heading2">With this shop hompeage template</h6>
    </Container>
  );
}

function Display() {
  return (
    <Container className="card-container">
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://ecommercebooth.com/wp-content/uploads/2017/05/Fancy-Product-Designer-WooCommerce-WordPress.jpg"
          />
          <Card.Body>
            <Card.Title>Fancy Product</Card.Title>
            <Card.Text> $40.00 - $80.00</Card.Text>
            <Button href="#Cart 0" variant="secondary">
              View options
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="http://cdn.shopify.com/s/files/1/0632/9244/0789/files/socialsharing.jpg?v=1653775088"
          />
          <Card.Body>
            <Card.Title>Special Item</Card.Title>
            <h5>⭐⭐⭐⭐⭐</h5>
            <Card.Text> $20.00 $18.00</Card.Text>
            <Button href="#Cart 0" variant="secondary">
              View options
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn-vz-info.ecomparemo.com/wordpress-media/2018/06/heres-the-truth-about-items-on-sale.jpg"
          />
          <Card.Body>
            <Card.Title>Sale Item</Card.Title>
            <Card.Text> $50.00 $25.00</Card.Text>
            <Button href="#Cart 0" variant="secondary">
              View options
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.oberlo.com/media/1603968639-trending-products-2018.jpg"
          />
          <Card.Body>
            <Card.Title>Popular Item</Card.Title>
            <h5>⭐⭐⭐⭐⭐</h5>
            <Card.Text> $40.00</Card.Text>
            <Button href="#Cart 0" variant="secondary">
              View options
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}

function Display1() {
  return (
    <Container className="card-container1">
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn-vz-info.ecomparemo.com/wordpress-media/2018/06/heres-the-truth-about-items-on-sale.jpg"
          />
          <Card.Body className="card-body">
            <Card.Title>Sale Item</Card.Title>
            <Card.Text>$50.00 $25.00</Card.Text>
            <Button href="#Cart 0" variant="secondary">
              View options
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://ecommercebooth.com/wp-content/uploads/2017/05/Fancy-Product-Designer-WooCommerce-WordPress.jpg"
          />
          <Card.Body>
            <Card.Title> Fancy Product</Card.Title>
            <Card.Text>$120.00 - $280.00</Card.Text>
            <Button href="#Cart 0" variant="secondary">
              View options
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="http://cdn.shopify.com/s/files/1/0632/9244/0789/files/socialsharing.jpg?v=1653775088"
          />
          <Card.Body>
            <Card.Title>Special Item</Card.Title>
            <h5>⭐⭐⭐⭐⭐</h5>
            <Card.Text>$20.00 $18.00</Card.Text>
            <Button href="#Cart 0" variant="secondary">
              View options
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.oberlo.com/media/1603968639-trending-products-2018.jpg"
          />
          <Card.Body>
            <Card.Title>Popular Item</Card.Title>
            <h5>⭐⭐⭐⭐⭐</h5>
            <Card.Text> $40.00</Card.Text>
            <Button href="#Cart 0" variant="secondary">
              View options
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}

function Footer() {
  return (
    <Container className="container-footer">
      <h6 className="footer-heading2">Copyright © Your Website 2022</h6>
    </Container>
  );
}
export default App;
