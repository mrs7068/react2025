import { useState, useRef, useEffect } from "react";
import song1 from "../assets/loud-fanfare-trumpet-effect-04-412050.mp3";
import song2 from "../assets/loud-fanfare-trumpet-effect-01-412045.mp3";
import "../App.css";

const playlist = [
    { id: 1, title: "Trumpet Fanfare 1", file: song1 },
    { id: 2, title: "Trumpet Fanfare 2", file: song2 },
];

export default function AudioPlayer() {
    const audioRef = useRef(new Audio());
    const audioContextRef = useRef(null);
    const sourceRef = useRef(null);
    const analyserRef = useRef(null);
    const animationRef = useRef(null);

    const [currentSongIndex, setCurrentSongIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [frequencyData, setFrequencyData] = useState(new Uint8Array(16));
    const [audioEnded, setAudioEnded] = useState(false);

    useEffect(() => {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 64;
        sourceRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
        sourceRef.current.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);

        return () => {
            cancelAnimationFrame(animationRef.current);
            audioContextRef.current?.close();
        };
    }, []);

    const animateVisualizer = () => {
        const analyser = analyserRef.current;
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        const draw = () => {
            analyser.getByteFrequencyData(dataArray);
            setFrequencyData([...dataArray.slice(0, 16)]);
            animationRef.current = requestAnimationFrame(draw);
        };
        draw();
    };

    useEffect(() => {
        if (currentSongIndex !== null) {
            setAudioEnded(false);
            audioRef.current.src = playlist[currentSongIndex].file;
            audioRef.current.play();
            setIsPlaying(true);
            audioContextRef.current.resume();
            animateVisualizer();
        }
    }, [currentSongIndex]);

    useEffect(() => {
        const audio = audioRef.current;
        const updateProgress = () => setProgress((audio.currentTime / audio.duration) * 100 || 0);
        audio.addEventListener("timeupdate", updateProgress);
        return () => audio.removeEventListener("timeupdate", updateProgress);
    }, []);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        const audio = audioRef.current;
        const handleEnd = () => {
            setIsPlaying(false);
            setAudioEnded(true);
            setCurrentSongIndex(null);
            setProgress(0);
            setFrequencyData(new Uint8Array(16));
        };
        audio.addEventListener("ended", handleEnd);
        return () => audio.removeEventListener("ended", handleEnd);
    }, []);

    const togglePlay = () => {
        if (!audioRef.current || currentSongIndex === null) return;
        if (isPlaying) {
            audioRef.current.pause();
            cancelAnimationFrame(animationRef.current);
        } else {
            audioRef.current.play();
            audioContextRef.current.resume();
            animateVisualizer();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="app-container">
            <div className="player-box">
                <h1>🎶 My Mini Sound Player 🎶</h1>

                <div className="playlist">
                    <h3>Choose a Sound:</h3>
                    {playlist.map((song, index) => (
                        <button
                            key={song.id}
                            className={`playlist-btn ${currentSongIndex === index ? "active" : ""}`}
                            onClick={() => setCurrentSongIndex(index)}
                        >
                            {song.title}
                        </button>
                    ))}
                </div>

                {currentSongIndex !== null && (
                    <div className="now-playing">
                        <p>▶ Now Playing: {playlist[currentSongIndex].title}</p>
                    </div>
                )}

                {currentSongIndex === null && (
                    <p className="placeholder-msg">Select a sound to start the visualizer 🎧</p>
                )}

                <div className={`visualizer-container ${isPlaying ? "active" : "paused"}`}>
                    {isPlaying && (
                        <div className="visualizer">
                            {frequencyData.map((value, i) => (
                                <div key={i} className="bar" style={{ height: `${value / 2}px` }} />
                            ))}
                        </div>
                    )}
                    {!isPlaying && currentSongIndex !== null && (
                        <div className="visualizer ghost">
                            {frequencyData.map((value, i) => (
                                <div key={i} className="bar ghost-bar" style={{ height: `${value / 2}px` }} />
                            ))}
                        </div>
                    )}
                </div>

                <div className="play-btn-wrapper">
                    <button
                        className="play-btn-circle"
                        onClick={togglePlay}
                        style={{
                            visibility: currentSongIndex === null || audioEnded ? "hidden" : "visible",
                        }}
                    >
                        {isPlaying ? "❚❚" : "▶"}
                    </button>
                </div>

                <div className="progress-container-wrapper">
                    <div
                        className="progress-container"
                        style={{
                            visibility: currentSongIndex === null || audioEnded ? "hidden" : "visible",
                        }}
                    >
                        <div className="progress-bar" style={{ width: `${progress}%` }} />
                    </div>
                </div>

                <div className="volume-control">
                    <label className="volume-label">Volume:</label>
                    <div className="volume-wrapper">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            className="volume-slider"
                        />
                        <div className="volume-bubble" style={{ left: `${volume * 100}%` }}>
                            {(volume * 100).toFixed(0)}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}