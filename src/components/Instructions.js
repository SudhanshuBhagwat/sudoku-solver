import React from 'react';

function Instructions() {
    return (
        <div className="instructions">
            <div>Instructions</div>
            <ul>
                <li>When you start a game of Sudoku, some blocks will be pre-filled for you. You cannot change these numbers in the course of the game.</li>
                <li>Each column must contain all of the numbers 1 through 9 and no two numbers in the same column of a Sudoku puzzle can be the same.</li>
                <li>Each row must contain all of the numbers 1 through 9 and no two numbers in the same row of a Sudoku puzzle can be the same.</li>
                <li>Each block must contain all of the numbers 1 through 9 and no two numbers in the same block of a Sudoku puzzle can be the same.</li>
            </ul>
        </div>
    );
}

export default Instructions;