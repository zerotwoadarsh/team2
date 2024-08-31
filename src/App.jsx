import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Feed from "./components/Feedback/Feed";
import Home from "./components/Feedback/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
