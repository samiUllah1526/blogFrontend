import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { NavigationBar } from "./../components/Navbar";
import { getBlogById } from "./../helpers/helpers";
import styles from "./blogPage.module.css";

export const BlogPage = () => {
  const firstRun = useRef(false);
  const [blog, setblog] = useState();
  const params = useParams();

  useEffect(() => {
    if (firstRun.current) {
      (async () => {
        const blog = await getBlogById(params.id);
        setblog(blog);
      })();
    }

    return () => {
      firstRun.current = true;
    };
  }, []);
  return (
    <>
      <NavigationBar id={params.id} blog={blog}>
        <h1 className={styles.textCenter}>{blog?.title}</h1>
        <p className={styles.textCenter}>{blog?.description}</p>
      </NavigationBar>
    </>
  );
};
