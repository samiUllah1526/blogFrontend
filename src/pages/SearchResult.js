import React from "react";
import { CustomContext } from "./../Context";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { NavigationBar } from "./../components/Navbar";

export const SearchResult = () => {
  const navigate = useNavigate();
  const { state } = React.useContext(CustomContext);

  const onClick = (id) => {
    navigate(`/blogs/${id}`);
  };
  return (
    <>
      <NavigationBar>
        <h1>Search results for category: {state?.selectedCategory}</h1>
        <div>
          {!state?.blogs.length && (
            <div>No result found for category: {state?.selectedCategory}</div>
          )}
        </div>
        {state?.blogs?.map((blog) => {
          return (
            <Card key={blog._id} style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "18rem" }}
                variant="top"
                src="https://images.unsplash.com/photo-1656716871396-93e2dc3a4e3f"
              />
              <Card.Body>
                <Card.Title>{blog?.title}</Card.Title>
                <Card.Title>{blog?.author}</Card.Title>
                <Card.Text>{blog?.description.slice(0, 50)}...</Card.Text>
                <Button onClick={() => onClick(blog._id)} variant="primary">
                  Read more
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </NavigationBar>
    </>
  );
};
