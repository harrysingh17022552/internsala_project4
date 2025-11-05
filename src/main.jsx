import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./dummy_component/About.jsx";
import Contact from "./dummy_component/Contact.jsx";
import E404 from "./dummy_component/E404.jsx";
import ToDoList from "./component/ToDoList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//basic Route, where three cildren used at root path to use some common component

function RootProvider() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { path: "/", element: <ToDoList /> },
        { path: "/contact", element: <Contact /> },
        { path: "/about", element: <About /> },
      ],
      element: <App />,
      ErrorBoundary: E404,
    },
  ]);
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootProvider />
  </StrictMode>
);
