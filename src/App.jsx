import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Piano from "./pages/Piano";
import Footer from "./components/Footer";

function App() {
    return (
        <Router basename="/react2025/">
            <div className="app-wrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/player" element={<Player />} />
                    <Route path="/piano" element={<Piano />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;