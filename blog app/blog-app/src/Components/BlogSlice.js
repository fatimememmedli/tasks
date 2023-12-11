import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useState } from "react";
import axios from "axios";
const initialState = {
  blogs: [],
  blog: {},
  error: "",
  loading: false,
  delete: false,
};
export const getAllBlogs = createAsyncThunk("getAllBlogs", async () => {
  const response = await axios(
    "https://6576df61197926adf62ca428.mockapi.io/blogs/blogs"
  );
  return response.data;
});
export const postBlog = createAsyncThunk("postBlog", async (obj) => {
  const response = await axios.post(
    "https://6576df61197926adf62ca428.mockapi.io/blogs/blogs",
    obj
  );
  return response.data;
});
export const deleteBlogById = createAsyncThunk("deleteBlogById", async (id) => {
  const response = await axios.delete(
    "https://6576df61197926adf62ca428.mockapi.io/blogs/blogs/" + id
  );

  return response.data;
});

export const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    updateBlogs: (state, action) => {
      state.blogs.push(action.payload);
    },
    putBlog: (state, action) => {
      console.log(action.payload);
      axios.put(
        "https://6576df61197926adf62ca428.mockapi.io/blogs/blogs/" +
          action.payload.id,
        action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBlogs.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    });
    builder.addCase(getAllBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(postBlog.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(postBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blog = action.payload;
    });
    builder.addCase(postBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteBlogById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteBlogById.fulfilled, (state, action) => {
      state.loading = false;
      state.blog = action.payload;
      state.blogs = state.blogs.filter((elem) => elem.id !== action.payload.id);
      state.delete = true;
      console.log(action.payload);
    });
    builder.addCase(deleteBlogById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { updateBlogs, putBlog } = BlogSlice.actions;

export default BlogSlice.reducer;
