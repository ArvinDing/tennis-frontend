import React, { useState, useEffect } from 'react';
import './styles/moveFinder.css';

const MoveFinder = (data) => {
    const [troops, setTroops] = useState("");
    const [opponentTroops, setOpponentTroops] = useState("");
    const [scoreDifference, setScoreDifference] = useState("");
    const [message, setMessage] = useState("Invalid Input");
    const [messageColor, setMessageColor] = useState("#ff9b9b");
    function updateMessage() {
        let valid = (move: Number | undefined) => {
            if (!move) {
                setMessage("No Forcing Moves");
            } else {
                setMessage("Forcing Move: " + move);
            }
            setMessageColor("#90EE90")
        };
        let invalid = () => { setMessage("Invalid Input"); setMessageColor("#ff9b9b") };
        if (troops.length===0 || opponentTroops.length ===0||scoreDifference.length===0) {
            invalid();
            return;
        }
        let nTroops = Number(troops);
        let nOpponentTroops = Number(opponentTroops);
        let nScoreDifference = Number(scoreDifference);
        if (isNaN(nTroops)|| nTroops > 100 || nTroops < 0) {
            invalid();
            return;
        }
        if (isNaN(nOpponentTroops)|| nOpponentTroops > 100 || nOpponentTroops < 0) {
            invalid();
            return;
        }
        if (isNaN(nScoreDifference)|| nScoreDifference > 2 || nScoreDifference < -2) {
            invalid();
            return;
        }
        console.log(JSON.stringify([nTroops, nOpponentTroops, nScoreDifference]))
        valid(data.data[JSON.stringify([nTroops, nOpponentTroops, nScoreDifference])]);
    }
    useEffect(() => {
        updateMessage();
    }, [troops, opponentTroops, scoreDifference]);
    return (
        <div className="container">
            <div style={{ backgroundColor: messageColor, width: '30vw', textAlign: 'center', padding: '10px', fontSize: '30px' }}>
                {message}
            </div>
            <form className="form">
                <label>
                    Your Troops (0 - 100):
                    <input type="text" value={troops} onChange={(e) => { setTroops(e.target.value) }} />
                </label>
                <label>
                    Opponent Troops (0 - 100):
                    <input type="text" value={opponentTroops} onChange={(e) => { setOpponentTroops(e.target.value) }} />
                </label>
                <label>
                    Score Difference (2, 1, 0, -1, -2):
                    <input type="text" value={scoreDifference} onChange={(e) => { setScoreDifference(e.target.value) }} />
                </label>

            </form>
        </div>
    );
};

export default MoveFinder;
