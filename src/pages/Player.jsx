import { Link } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";

export default function Player() {
    return (
        <div className="app-container">
            <Link to="/">
                <button className="btn btn-purple back-btn">
                    ⬅ Back to Home
                </button>
            </Link>

            <AudioPlayer />
        </div>
    );
}
