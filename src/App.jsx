import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Piano from "./pages/Piano.jsx";

export default function App() {
    return (
        <Router basename="/react2025/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/player" element={<Player />} />
                <Route path="/piano" element={<Piano />} />
            </Routes>
        </Router>
    );
}
