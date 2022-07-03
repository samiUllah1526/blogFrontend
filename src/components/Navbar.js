import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { getBlogsbyCategory, deleteBlogById } from "./../helpers/helpers";
import { CustomContext } from "./../Context";

export const NavigationBar = ({ id, blog, children }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const { setSelectdBlog, setBlogs } = React.useContext(CustomContext);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = async () => {
    const result = await getBlogsbyCategory(value);

    const payload = {
      blogs: result,
      selectedCategory: value,
    };
    setBlogs(payload);
    navigate("/search-result");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/blogs")}>Blogs</Nav.Link>
            <Nav.Link onClick={() => navigate("/blogs/create")}>
              Create a blog
            </Nav.Link>
            {id && (
              <Nav.Link
                onClick={() => {
                  setSelectdBlog(blog);
                  navigate(`/blogs/${id}/edit`);
                }}
              >
                Edit
              </Nav.Link>
            )}
            {id && (
              <Nav.Link
                onClick={async () => {
                  await deleteBlogById(id);
                  navigate("/blogs/");
                }}
              >
                Delete
              </Nav.Link>
            )}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={value}
              onChange={onChange}
            />
            <Button onClick={onSubmit} variant="outline-success">
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
      {children}
    </>
  );
};
