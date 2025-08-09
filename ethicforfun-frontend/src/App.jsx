import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    {/* Placeholder routes */}
    <Route path="/register" element={<div>Register Page</div>} />
    <Route path="/login" element={<div>Login Page</div>} />
    </Routes>
    </Router>
  );
}

export default App;
