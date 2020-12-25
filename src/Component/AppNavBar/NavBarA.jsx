import { useState } from "react";
import { toast } from "react-toastify";
import { Form, Navbar, FormControl, Button, Nav } from "react-bootstrap";

const NavBarA = ({ onFormSubmit }) => {
  const [searchMovie, setSearchImage] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.currentTarget;
    setSearchImage(value.toLowerCase());
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (searchMovie.trim() === "") {
      toast.error("Please enter request", {
        autoClose: 2000,
        position: "top-center",
      });
      return;
    }
    // console.log(searchMovie)
    onFormSubmit(searchMovie);
    resetForm();
  };

  const resetForm = () => {
    setSearchImage("");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/movies">Movies</Nav.Link>
        </Nav>
        <Form inline onSubmit={handleSubmitForm}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchMovie}
            onChange={handleInputChange}
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarA;
