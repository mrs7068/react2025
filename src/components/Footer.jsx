import React from "react";
import "../App.css";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-links">
                <a href="https://github.com/mrs7068/react2025" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://www.aihonestybadge.com" target="_blank" rel="noopener">
                    <img src="https://www.aihonestybadge.com/badges/ai-assisted.svg" alt="AI Assisted Badge" />
                </a>
                <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">
                    CC BY 4.0
                </a>
            </div>
            <div className="footer-copy">&copy; 2025 Michael Simons</div>
        </footer>
    );
}
