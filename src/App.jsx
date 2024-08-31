import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
//import { Button } from "./components/ui/button";
import Feed from "./components/ui/Feed"; // Assuming feed is a component

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
