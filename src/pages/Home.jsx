import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="home-container" aria-labelledby="site-title">
            <h1 id="site-title">🎵 Welcome to a Fun Music React Site 🎵</h1>

            <p className="intro-text">
                This site is designed for <strong>instructors, classmates, and anyone interested in web
                development</strong> who wants to see examples of interactive media,
                accessible design, and front-end audio experiences in a multi-page React site.
            </p>

            <section aria-labelledby="purpose-heading" className="info-section">
                <h2 id="purpose-heading">Purpose</h2>
                <p>
                    This project shows my experimentation with <strong>dynamic web audio</strong>,
                    <strong> interactive UI</strong>, and <strong>JavaScript-powered media features</strong>.
                    It represents part of my semester portfolio and shows how I approached
                    creativity, accessibility, and usability while building engaging audio
                    tools as an outlet for my passion for music.
                </p>
            </section>

            <section aria-labelledby="features-heading" className="info-section">
                <h2 id="features-heading">Explore</h2>

                <ul className="feature-list">
                    <li>
                        <strong>Sound Player: </strong>Play audio clips with a visualizer,
                        interactive controls, progress tracking, and volume adjustment.
                    </li>
                    <li>
                        <strong>Virtual Piano: </strong>Play piano notes by clicking or
                        using the keyboard for a more accessible musical interaction.
                    </li>
                </ul>

                <div className="button-group">
                    <Link to="/player">
                        <button className="btn btn-purple">🎧 Sound Player</button>
                    </Link>

                    <Link to="/piano">
                        <button className="btn btn-pink">🎹 Virtual Piano</button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
