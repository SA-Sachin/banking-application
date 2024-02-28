import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/loginsignup/Signup";
import Login from "./components/loginsignup/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
