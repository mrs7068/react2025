import { useState } from "react";
import "./App.css";
import song1 from "./assets/loud-fanfare-trumpet-effect-04-412050.mp3";
import song2 from "./assets/loud-fanfare-trumpet-effect-01-412045.mp3";

function App() {
    const [currentSong, setCurrentSong] = useState(null);

    const playSong = (song) => {
        if (currentSong) {
            currentSong.pause();
        }
        const newSong = new Audio(song);
        newSong.play();
        setCurrentSong(newSong);
    };

    return (
        <div className="app-container">
            <div className="player-box">
                <h1>🎶 My Mini Sound Player 🎶</h1>
                <div className="button-group">
                    <button className="btn btn-purple" onClick={() => playSong(song1)}>
                        Play Sound 1
                    </button>
                    <button className="btn btn-pink" onClick={() => playSong(song2)}>
                        Play Sound 2
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
