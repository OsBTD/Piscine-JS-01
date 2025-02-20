function crosswordSolver(puzzle, words) {
    // Convert puzzle into 2D array and convert all numbers to dots initially
    let grid = puzzle.split('\n').map(row => 
        row.split('').map(cell => /[0-9]/.test(cell) ? '.' : cell)
    );
    
    // Find word starting positions from original puzzle
    let startPositions = [];
    puzzle.split('\n').forEach((row, rowIndex) => {
        row.split('').forEach((cell, colIndex) => {
            if (/[0-9]/.test(cell)) {
                startPositions.push({row: rowIndex, col: colIndex});
            }
        });
    });

    function canPlaceWordHorizontally(word, row, col) {
        if (col + word.length > grid[row].length) return false;
        
        for (let i = 0; i < word.length; i++) {
            let currentCell = grid[row][col + i];
            if (currentCell !== '.' && currentCell !== word[i]) {
                return false;
            }
        }
        return true;
    }

    function canPlaceWordVertically(word, row, col) {
        if (row + word.length > grid.length) return false;
        
        for (let i = 0; i < word.length; i++) {
            let currentCell = grid[row + i][col];
            if (currentCell !== '.' && currentCell !== word[i]) {
                return false;
            }
        }
        return true;
    }

    function placeWordHorizontally(word, row, col) {
        for (let i = 0; i < word.length; i++) {
            grid[row][col + i] = word[i];
        }
    }

    function placeWordVertically(word, row, col) {
        for (let i = 0; i < word.length; i++) {
            grid[row + i][col] = word[i];
        }
    }

    // Try to place each word
    let remainingWords = [...words];
    
    // First try horizontal placements
    for (let pos of startPositions) {
        for (let i = 0; i < remainingWords.length; i++) {
            const word = remainingWords[i];
            if (canPlaceWordHorizontally(word, pos.row, pos.col)) {
                placeWordHorizontally(word, pos.row, pos.col);
                remainingWords.splice(i, 1);
                break;
            }
        }
    }
    
    // Then try vertical placements for remaining words
    for (let pos of startPositions) {
        for (let i = 0; i < remainingWords.length; i++) {
            const word = remainingWords[i];
            if (canPlaceWordVertically(word, pos.row, pos.col)) {
                placeWordVertically(word, pos.row, pos.col);
                remainingWords.splice(i, 1);
                break;
            }
        }
    }

    return grid.map(row => row.join('')).join('\n');
}

// Test the function
const puzzle = '2001\n0..0\n1000\n0..0';
const words = ['casa', 'alan', 'ciao', 'anta'];
console.log(crosswordSolver(puzzle, words));