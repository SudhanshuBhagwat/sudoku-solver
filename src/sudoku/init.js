var rows = 9, cols = 9;

function initBoard() {
    // return Array.from(Array(rows), () => Array(cols).fill(0));
    return [[0,0,0,3,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,2,0,0,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,8,0,2,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,9,0,0,0]];
}

module.exports = initBoard;