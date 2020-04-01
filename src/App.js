import React, { useState, useCallback } from 'react';
import './App.css';
import SudokuBoard from './components/SudokuBoard';
import ActionButtons from './components/ActionButtons';
import Instructions from './components/Instructions';
import StartScreen from './components/StartScreen';

function App() {
  const [difficulty, setDifficulty] = useState(undefined);
  const getdifficulty = useCallback((n) => {
    setDifficulty(n);
  }, [difficulty, setDifficulty]);

  return (
    <div>
      <StartScreen setDiff={getdifficulty} diff={difficulty} />
      <div className="App" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        zIndex: -1,
        height: "100vh",
        width: "100vw",
        position: "absolute",
        overflow: "hidden",
      }}>
        {difficulty !== undefined ? <h1>Sudoku Solver</h1> : <div></div>}
        {difficulty === undefined ? <div></div> : <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          height: "80vh"
        }}>
          <Instructions />
          <SudokuBoard difficulty={difficulty} />
          <ActionButtons />
        </div>
        }
      </div>
    </div>
  );
}

export default App;
