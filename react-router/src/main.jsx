import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Users from "./routes/users/Users";
import User from "./routes/user/User";
import Posts from "./routes/posts/Posts";
import Layout from "./layouts/layout";
import Post from "./routes/post/Post";
import ErrorPage from "./errorpage/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<App />} errorElement={<ErrorPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:userId" element={<User />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:postId" element={<Post />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
