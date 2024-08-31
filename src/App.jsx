import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Feed from "./components/ui/Feedback/Feed";
import Home from "./components/ui/Home";
import Navbar from "./components/ui/Navbar/Navbar";

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
