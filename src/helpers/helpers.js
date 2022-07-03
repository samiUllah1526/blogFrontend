//

export const getAllBlogs = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blogs");
  const result = await res.json();
  //   console.log("result", result);
  return result;
};

export const getBlogsbyCategory = async (category) => {
  if (!category.trim()) {
    console.log("search=>", !category.trim());
    return [];
  }
  const res = await fetch(
    `http://localhost:5000/api/v1/blogs?category=${category}`
  );
  const result = await res.json();
  return result;
};

export const getBlogById = async (id) => {
  const res = await fetch(`http://localhost:5000/api/v1/blogs/${id}`);
  const result = await res.json();
  return result;
};

export const createBlog = async (data) => {
  const response = await fetch("http://localhost:5000/api/v1/blogs", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  return response.json();
};

export const updateBlog = async (id, data) => {
  const response = await fetch(`http://localhost:5000/api/v1/blogs/${id}`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json();
};

export const deleteBlogById = async (id) => {
  const response = await fetch(`http://localhost:5000/api/v1/blogs/${id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json();
};
