import React from 'react';

function ActionButtons() {
    return (
        <div className="btn-container">
            <div>Action Buttons</div>
            <button className="btn">Reset</button>
            <button className="btn">Generate A New Board</button>
            <button className="btn">Hint</button>
            <p>Hints Left: 3</p>
        </div>
    );
}

export default ActionButtons;