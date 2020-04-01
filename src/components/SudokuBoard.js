import React, { useState, useEffect } from 'react';
import produce from 'immer';
import fetch from 'node-fetch';


function SudokuBoard({ difficulty }) {
    var baseURL = `http://www.cs.utep.edu/cheon/ws/sudoku/new/?size=9&levels=${difficulty}`;
    const [board, setBoard] = useState([]);
    const [model, toggleModel] = useState(false);
    const originalBoard = board;
    var size = 60;
    var boardSize = 9;
    const showModel = (e) => toggleModel(!e);

    useEffect(() => {
        async function fetchBoard() {
            var response = await fetch(baseURL)
            var json = await response.json();

            var board = [];
            let squares = json.squares;
            let found = false;
            for (let i = 0; i < boardSize; i++) {
                let row = [];
                for (let j = 0; j < boardSize; j++) {
                    squares.forEach(obj => {
                        if (obj.x === i && obj.y === j) {
                            row.push(obj.value);
                            found = true;
                        }
                    });
                    if (!found) {
                        row.push(0);
                    }
                    found = false;
                }
                board.push(row);
            }
            setBoard(board);
        }
        fetchBoard();
    }, []);

    return (
        <div>
            {board.length !== 0 ?
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
                                    console.log(model);
                                }
                            })
                            setBoard(newBoard);
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
                : <div style={{
                    display: "flex",
                    height: 60*9,
                    width: 60*9,
                    // gridTemplateColumns: `repeat(${9}, ${size}px)`,
                    padding: "0.6em",
                    justifyContent: "center",
                    alignItems: "center"
                }} > Loading... </div>}
        </div>
    );

}


export default SudokuBoard;