import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Docs from "./pages/Docs";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<h1>Home</h1>} path="/" />
          <Route
            element={
              <>
                <Docs /> <Footer />
              </>
            }
            path="/docs"
          />
          <Route
            element={
              <>
                <Login /> <Footer />
              </>
            }
            path="/login"
          />
          <Route
            element={
              <>
                <Register />
                <Footer />
              </>
            }
            path="/register"
          />
        </Routes>
      </Router>
    </>
  );
}
