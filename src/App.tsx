import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Docs from "./pages/Docs";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Docs />} path="/docs" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
