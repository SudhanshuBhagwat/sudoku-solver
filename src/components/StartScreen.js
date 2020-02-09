import React, { useState, useEffect } from 'react'
import Difficulty from '../sudoku/Difficulty';

function StartScreen(props) {
    useEffect(() => {
        const element = document.querySelector("#hello");
        element.classList.add("transit");
    }, []);

    useEffect(() => {
        if(props.diff !== undefined) {
            toggleStartScreen();
        }
    }, [props.diff]);

    const [startScreen, setStartScreen] = useState(true);
    const [difficultyButtons, setDifficultyButtons] = useState(false);
    const toggleStartScreen = () => (setStartScreen(false));
    const toggleDifficultyButtons = () => (setDifficultyButtons(true));

    return (
        <div>
            <div className={startScreen ? "start-screen" : "start-screen hide"}>
                <div id="hello" className={!difficultyButtons ? "something" : "something transit hide"}>
                    <div className="label" style={{ userSelect: "none" }}>Choose: </div>
                    <div>
                        <button onClick={toggleDifficultyButtons} className="start-screen-button">Start with a Generated Board</button>
                        <button onClick={toggleStartScreen} className="start-screen-button">Create your own Board</button>
                    </div>
                </div>
                <div className={difficultyButtons ? "something transit" : "something transit hide"}>
                    <div className="label" style={{ userSelect: "none" }}>Choose Difficulty: </div>
                    <div>
                        <button onClick={() => props.setDiff(Difficulty.EASY)} className="start-screen-button">Easy</button>
                        <button onClick={() => props.setDiff(Difficulty.MEDIUM)} className="start-screen-button">Medium</button>
                        <button onClick={() => props.setDiff(Difficulty.HARD)} className="start-screen-button">Hard</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartScreen;