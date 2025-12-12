import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-container">
            <h1>🎵 Welcome to a Fun Music React Site 🎵</h1>
            <p>This is a multi-page version of some audio player apps.</p>

            <div className="button-group">
                <Link to="/player">
                    <button className="btn btn-purple">Sound Player</button>
                </Link>

                <Link to="/piano">
                    <button className="btn btn-pink">Play the Piano</button>
                </Link>
            </div>
        </div>
    );
}
