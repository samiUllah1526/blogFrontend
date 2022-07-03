import React, { useReducer } from "react";
const SET_BLOGS = "SET_BLOGS";
const SET_SELECTED_BLOGS = "SET_SELECTED_BLOGS";

export const CustomContext = React.createContext();

// reducer
const searchedBlogs = (state, action) => {
  switch (action.type) {
    case SET_BLOGS:
      return {
        ...state,
        blogs: [...action.payload.blogs],
        selectedCategory: action.payload.selectedCategory,
      };

    case SET_SELECTED_BLOGS:
      return {
        ...state,
        selectedBlog: { ...action.payload },
      };

    default:
      return state;
  }
};

const initialState = { blogs: [], selectedCategory: null, selectedBlog: {} };

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(searchedBlogs, initialState);

  const setBlogs = (payload) => dispatch({ type: SET_BLOGS, payload });
  const setSelectdBlog = (payload) =>
    dispatch({ type: SET_SELECTED_BLOGS, payload });
  return (
    <CustomContext.Provider value={{ setBlogs, setSelectdBlog, state }}>
      {children}
    </CustomContext.Provider>
  );
};
