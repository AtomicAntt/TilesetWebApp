import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Comments from "./pages/Comments";
import Editor from "./pages/Editor";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/editor" element={<Editor />} />
            </Routes>
        </Router>
    );
}

export default App;