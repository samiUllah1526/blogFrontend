import React, { useEffect, useState, useRef, useContext } from "react";
import { getAllBlogs } from "./../helpers/helpers";
import { NavigationBar } from "./../components/Navbar";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const firstRun = useRef(true);
  const [blogs, setblogs] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (firstRun.current) {
      (async () => {
        console.log("made api call");
        const blogs = await getAllBlogs();
        const featuredBlogs = blogs.splice(0, 10);
        console.log("react featurePosts", featuredBlogs);
        setblogs(() => {
          console.log("going to set blogs", featuredBlogs);
          return featuredBlogs;
        });
      })();
    }

    return () => {
      console.log("uncomment");
      firstRun.current = false;
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

export default Home;
