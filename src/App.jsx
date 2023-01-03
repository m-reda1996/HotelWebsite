import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorHandle from "./pages/ErrorHandle";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorHandle />,
    },
    {
      path: "room/:id",
      element: <RoomDetails />,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
  
    </div>
  );
}

export default App;
