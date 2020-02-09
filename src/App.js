import React from 'react';
import './App.css';
import ReactBoard from './components/SudokuBoard';
import ActionButtons from './components/ActionButtons';
import Instructions from './components/Instructions';

function App() {
  return (
    <div className="App" style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}>
      <h1>Sudoku Solver</h1>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        height: "80vh"
      }}>
        <Instructions />
        <ReactBoard />
        <ActionButtons />
      </div>
    </div>
  );
}

export default App;
