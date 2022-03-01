import { Outlet, Link } from "react-router-dom";
import {Button, Container, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';

function App() {

  const etiquetaA = {
    'color' : 'inherit', 
    'text-decoration': 'inherit'
  };

  return (
    <>
    
      <div className="App">
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll
      >
        <Nav.Link><Link to="/facturas" style={etiquetaA}>Invoices</Link></Nav.Link>
        <Nav.Link ><Link to="/expenses" style={etiquetaA}>Expenses</Link></Nav.Link>
        <Nav.Link ><Link to="/usuarios/listar" style={etiquetaA}>usuarios</Link></Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

      <Outlet />
      </div>
    </>
  );
}

export default App;
