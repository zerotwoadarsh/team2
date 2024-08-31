import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Feed from "./components/Feedback/Feed";
import Home from "./components/Feedback/Home";
import Navbar from "./components/Navbar/Navbar";
import Analysis from "./components/Analysis/Analysis";
import Post from "./components/Feedback/post"
import CForm from "./components/CrimeForm/CForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post" element={<Post />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/form" element={<CForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
