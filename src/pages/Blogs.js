import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllBlogs } from "./../helpers/helpers";
import { NavigationBar } from "./../components/Navbar";
import { Card, Button } from "react-bootstrap";

export const Blogs = () => {
  const firstRun = useRef(false);
  const [blogs, setblogs] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (firstRun.current) {
      console.log("firstRun.current?", firstRun.current);
      (async () => {
        const blogs = await getAllBlogs();

        setblogs(() => blogs);
      })();
    }

    return () => {
      firstRun.current = true;
    };
  }, []);

  const onClick = (id) => {
    navigate(`/blogs/${id}`);
  };
  return (
    <>
      <NavigationBar>
        <div style={{ display: "flex" }}>
          {console.log(" jsk home", blogs)}
          {blogs &&
            blogs.map((blog) => {
              return (
                <Card key={blog._id} style={{ width: "18rem" }}>
                  <Card.Img
                    style={{ height: "18rem" }}
                    variant="top"
                    src={blog?.imageUrl}
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
        </div>
      </NavigationBar>
    </>
  );
};
