// Tumhe Layout Routing use karni hai.
// Navbar + Footer same rahenge
// Sirf center/MainContent change hoga button click par

// ===============================
// Folder Structure Example
// src/
//   App.jsx
//   pages/
//      Home.jsx
//      About.jsx
//      Contact.jsx
//      Address.jsx
//   components/
//      Navbar.jsx
//      Footer.jsx
//      MainContent.jsx
//      Layout.jsx
// ===============================



// ===============================
// App.jsx
// ===============================

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout";
import MainContent from "./component/MainContent";
import About from "./component/About";
import Contact from "./component/Contact";
import Address from "./component/Address";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Navbar + Footer fixed
    children: [
      {
        index: true,
        element: <MainContent />, // default Home page
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "address",
        element: <Address />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;