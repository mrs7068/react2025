import { Link } from "react-router-dom";
import VirtualPiano from "../components/VirtualPiano";

export default function Piano() {
    return (
        <div className="app-container">
            <Link to="/">
                <button className="btn btn-purple back-btn">
                    ⬅ Back to Home
                </button>
            </Link>

            <VirtualPiano />
        </div>
    );
}
