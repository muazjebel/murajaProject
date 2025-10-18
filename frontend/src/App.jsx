import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "@/pages/public/About";
import Home from "@/pages/public/Home";
import Services from "@/pages/public/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;