import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Feed from "./components/Feedback/Feed";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Analysis from "./components/Analysis/Analysis";
import Post from "./components/Feedback/post"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/post" element={<Post />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </Router>
  );
}

export default App;
