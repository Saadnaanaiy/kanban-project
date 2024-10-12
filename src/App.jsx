import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./App.css"; // Import custom CSS

const App = () => {
  return (
    <div>
      <Router>
        <div>
          {/* Custom Navbar */}
          <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
              <Link className="navbar-brand custom-brand" to="/">
                MyApp
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link custom-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link custom-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link custom-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
