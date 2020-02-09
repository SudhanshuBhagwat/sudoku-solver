import React, { useState } from 'react';
import initBoard from '../sudoku/init';
import produce from 'immer';

function SudokuBoard(props) {
    const [board, setBoard] = useState(initBoard());
    const [model, toggleModel] = useState(false);
    const originalBoard = board;
    var size = 60;
    var boardSize = 9;
    const showModel = (e) => toggleModel(!e);

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(${9}, ${size}px)`,
            padding: "0.6em",
            border: "2px solid #888888",
            borderRadius: "2em",
        }}>
            {board.map((row, i) => row.map((col, j) => <div
                onClick={() => {
                    const newBoard = produce(board, boardCopy => {
                        if (originalBoard[i][j] === 0) {
                            showModel();
                        }
                    })
                    setBoard(newBoard)
                }}
                key={`${i}-${j}`} style={{
                    width: size,
                    height: size,
                    borderRight: (((j + 1) % 3 === 0) && ((j + 1) !== boardSize)) ? "solid 2px #888888" : undefined,
                    borderBottom: (((i + 1) % 3 === 0) && ((i + 1) !== boardSize)) ? "solid 2px #888888" : undefined,
                    backgroundColor: undefined,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    userSelect: "none",
                    fontSize: 24,
                    fontWeight: "bold"
                }}>{board[i][j]}</div>))}
        </div>
    );
}

export default SudokuBoard;