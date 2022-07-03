import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "./../components/Navbar";
import { createBlog } from "./../helpers/helpers";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log("form sumit", { title, author, content });
    const payload = {
      title,
      description: content,
      author,
      category,
      imageUrl,
    };

    console.log("payload", payload);
    const response = await createBlog(payload);
    if (response) navigate("/blogs");
  };
  return (
    <>
      <NavigationBar>
        <div className="container">
          <h1 className="mb-4">New Article</h1>

          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                required
                type="text"
                name="title"
                id="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label htmlFor="author">Author</label>
              <input
                required
                type="text"
                name="author"
                id="author"
                className="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
                required
                type="text"
                name="category"
                id="category"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image Url</label>
              <input
                required
                placeholder="Please provide image url"
                type="text"
                name="image"
                id="image"
                className="form-control"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                id="content"
                className="form-control"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <a href="/" className="btn btn-secondary">
              Cancel
            </a>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </NavigationBar>
    </>
  );
};
