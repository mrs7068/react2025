import React, { useEffect } from "react";
import "../App.css";

import a3 from "../assets/piano/a3.mp3";
import a_3 from "../assets/piano/a-3.mp3";
import b3 from "../assets/piano/b3.mp3";
import c3 from "../assets/piano/c3.mp3";
import c_3 from "../assets/piano/c-3.mp3";
import d3 from "../assets/piano/d3.mp3";
import d_3 from "../assets/piano/d-3.mp3";
import e3 from "../assets/piano/e3.mp3";
import f3 from "../assets/piano/f3.mp3";
import f_3 from "../assets/piano/f-3.mp3";
import g3 from "../assets/piano/g3.mp3";
import g_3 from "../assets/piano/g-3.mp3";

import a4 from "../assets/piano/a4.mp3";
import a_4 from "../assets/piano/a-4.mp3";
import b4 from "../assets/piano/b4.mp3";
import c4 from "../assets/piano/c4.mp3";
import c_4 from "../assets/piano/c-4.mp3";
import d4 from "../assets/piano/d4.mp3";
import d_4 from "../assets/piano/d-4.mp3";
import e4 from "../assets/piano/e4.mp3";
import f4 from "../assets/piano/f4.mp3";
import f_4 from "../assets/piano/f-4.mp3";
import g4 from "../assets/piano/g4.mp3";
import g_4 from "../assets/piano/g-4.mp3";

import a5 from "../assets/piano/a5.mp3";
import a_5 from "../assets/piano/a-5.mp3";
import b5 from "../assets/piano/b5.mp3";
import c5 from "../assets/piano/c5.mp3";
import c_5 from "../assets/piano/c-5.mp3";
import d5 from "../assets/piano/d5.mp3";
import d_5 from "../assets/piano/d-5.mp3";
import e5 from "../assets/piano/e5.mp3";
import f5 from "../assets/piano/f5.mp3";
import f_5 from "../assets/piano/f-5.mp3";
import g5 from "../assets/piano/g5.mp3";
import g_5 from "../assets/piano/g-5.mp3";

const notes = {
    "a3": a3, "a-3": a_3, "b3": b3, "c3": c3, "c-3": c_3, "d3": d3, "d-3": d_3,
    "e3": e3, "f3": f3, "f-3": f_3, "g3": g3, "g-3": g_3,

    "a4": a4, "a-4": a_4, "b4": b4, "c4": c4, "c-4": c_4, "d4": d4, "d-4": d_4,
    "e4": e4, "f4": f4, "f-4": f_4, "g4": g4, "g-4": g_4,

    "a5": a5, "a-5": a_5, "b5": b5, "c5": c5, "c-5": c_5, "d5": d5, "d-5": d_5,
    "e5": e5, "f5": f5, "f-5": f_5, "g5": g5, "g-5": g_5
};

const keyOrder = [
    "a3","a-3","b3","c3","c-3","d3","d-3","e3","f3","f-3","g3","g-3",
    "a4","a-4","b4","c4","c-4","d4","d-4","e4","f4","f-4","g4","g-4",
    "a5","a-5","b5","c5","c-5","d5","d-5","e5","f5","f-5","g5","g-5"
];

const keyMap = {
    "a": "a3", "w": "a-3", "s": "b3", "d": "c3", "r": "c-3", "f": "d3",
    "t": "d-3", "g": "e3", "h": "f3", "u": "f-3", "j": "g3", "i": "g-3",

    "k": "a4", "o": "a-4", "l": "b4", ";": "c4", "p": "c-4", "'": "d4",
    "]": "d-4", "\\": "e4", "z": "f4", "x": "f-4", "c": "g4", "v": "g-4",

    "b": "a5", "n": "a-5", "m": "b5", ",": "c5", ".": "c-5", "/": "d5",
    "1": "d-5", "2": "e5", "3": "f5", "4": "f-5", "5": "g5", "6": "g-5"
};

function playNote(note) {
    const audio = new Audio(notes[note]);
    audio.play();
}

export default function Piano() {
    useEffect(() => {
        const handleKeyDown = (e) => {
            const note = keyMap[e.key.toLowerCase()];
            if (note) playNote(note);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="app-container">
            <div className="player-box">
                <h1>🎹 My Mini Virtual Piano 🎹</h1>
                <p>Click the keys or use your computer's keyboard!</p>
                <div className="piano">
                    {keyOrder.map((key) => (
                        <button
                            key={key}
                            className={`piano-key ${key.includes("-") ? "black-key" : "white-key"}`}
                            onClick={() => playNote(key)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
