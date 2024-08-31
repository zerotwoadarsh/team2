import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Feed from "./components/ui/Feed"; 
import Home from './components/ui/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
