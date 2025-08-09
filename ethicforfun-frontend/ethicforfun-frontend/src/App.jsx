import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TheoryModulePage from "./pages/TheoryModulePage";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/theory" element={<TheoryModulePage />} />
    {/* Placeholder routes */}
    <Route path="/register" element={<div>Register Page</div>} />
    <Route path="/login" element={<div>Login Page</div>} />
    </Routes>
    </>
  );
}

export default App;
