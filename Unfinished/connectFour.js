/*  */
    // The grid is 6 row by 7 columns, those being named from A to G.
    // You will receive a list of strings showing the order of the pieces which dropped in columns:
    // The list may contain up to 42 moves and shows the order the players are playing.
    // The first player who connects four items of the same color is the winner.
    // You should return "Yellow", "Red" or "Draw" accordingly.

const letters = { 'A':0, 'B':1, 'C':2, 'D':3, 'E':4, 'F':5, 'G':6 };

function printGrid(grids) {
    console.log(grids);
}

function whoIsWinner(moves) {
    let grid = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]
    ];

    for (let i = 0; i < moves.length; i++) {
        moves[i] = moves[i].split('_');
        if (moves[i][1] == 'Red') moves[i][1] = 1;
        else moves[i][1] = 2; 
    };

    for (let j = 0; j < moves.length; j++) { // For every move
        for (let k = 0; k < 7; k++) { // Which column it's in
            if (grid[letters[moves[j][0]]][k] == 0) { // If the position in grid is empty
                grid[letters[moves[j][0]]][k] = moves[j][1]; // grid[letters[moves[j][0]]][k] is the number put into the grid

                if ((grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]][k-1]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]][k-2]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]][k-3])) { // If the newest input is equal to the 3 numbers to the left of it
                    printGrid(grid);
                    if (moves[j][1] == 1) return 'Red'
                    else if (moves[j][1] == 2) return 'Yellow';
                } 
                
                // From the top chip - Final
                else if ((letters[moves[j][0]] >= 3) && (k >= 3)) { // If the newest input is equal to the 3 numbers diagonally up
                    if ((grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]-1][k-1]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]-2][k-2]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]-3][k-3])) {
                        printGrid(grid);
                        if (moves[j][1] == 1) return 'Red'
                        else if (moves[j][1] == 2) return 'Yellow';
                    }
                } else if ((letters[moves[j][0]] <= 3) && (k >= 3)) { // If the newest input is equal to the 3 numbers diagonally down
                    if ((grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]+1][k-1]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]+2][k-2]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]+3][k-3])) {
                        printGrid(grid);
                        if (moves[j][1] == 1) return 'Red';
                        else if (moves[j][1] == 2) return 'Yellow';
                    }
                } 

                // From the second to top chip - Finished
                else if ((letters[moves[j][0]] >= 2) && (letters[moves[j][0]] <= 5) && (k >= 2) && (k <= 4)) { // If the newest input is equal to the 3 numbers diagonally up
                    if ((grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]-1][k-1]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]-2][k-2]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]+1][k+1])) {
                        printGrid(grid);
                        if (moves[j][1] == 1) return 'Red'
                        else if (moves[j][1] == 2) return 'Yellow';
                    }
                } else if ((letters[moves[j][0]] >= 1) && (letters[moves[j][0]] <= 4) && (k >= 2) && (k <= 4)) { // If the newest input is equal to the 3 numbers diagonally down
                    if ((grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]+1][k-1]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]+2][k-2]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]-1][k+1])) {
                        printGrid(grid);
                        if (moves[j][1] == 1) return 'Red';
                        else if (moves[j][1] == 2) return 'Yellow';
                    }
                } 

                // From the third chip to the top - Finished
                else if ((letters[moves[j][0]] >= 1) && (letters[moves[j][0]] <= 4) && (k >= 1) && (k <= 3)) { // If the newest input is equal to the 3 numbers diagonally up
                    if ((grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]-1][k-1]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]+1][k+1]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]+2][k+2])) {
                        printGrid(grid);
                        if (moves[j][1] == 1) return 'Red'
                        else if (moves[j][1] == 2) return 'Yellow';
                    }
                } else if ((letters[moves[j][0]] <= 2) && (letters[moves[j][0]] >= 5) && (k >= 1) && (k <= 3)) { // If the newest input is equal to the 3 numbers diagonally down
                    if ((grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]+1][k-1]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]-1][k+1]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]-2][k+2])) {
                        printGrid(grid);
                        if (moves[j][1] == 1) return 'Red';
                        else if (moves[j][1] == 2) return 'Yellow';
                    }
                } 

                // From the bottom chip - Finished
                else if ((letters[moves[j][0]] >= 3) && (k <= 3)) { // If the newest input is equal to the 3 numbers diagonally up
                    if ((grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]-1][k+1]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]-2][k+2]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]-3][k+3])) { // Diagonally up
                        printGrid(grid);
                        if (moves[j][1] == 1) return 'Red'
                        else if (moves[j][1] == 2) return 'Yellow';
                    } 
                } else if ((letters[moves[j][0]] <= 3) && (k <= 3)) { // If the newest input is equal to the 3 numbers diagonally up
                    if ((grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]+1][k+1]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]+2][k+2]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]+3][k+3])) { // Diagonally down
                        printGrid(grid);
                        if (moves[j][1] == 1) return 'Red';
                        else if (moves[j][1] == 2) return 'Yellow';
                    }
                }

                else { // Otherwise, it checks if the numbers down are matching
                    for (let l = 0; l <= 3; l++) {
                        for (let m = 0; m < 6; m++) {
                            if ((grid[l][m] != 0) && (grid[l][m] == grid[l+1][m]) && (grid[l][m] == grid[l+2][m]) && (grid[l][m] == grid[l+3][m])) {
                                printGrid(grid);
                                if (moves[j][1] == 1) return 'Red'
                                else if (moves[j][1] == 2) return 'Yellow';
                            }
                        }
                    }
                }
                break;
            }
        }
    }
    printGrid(grid);
    return 'Draw';
}
whoIsWinner([
        'C_Yellow',
        'C_Yellow',
        'C_Yellow',

        'D_Yellow',
        'D_Yellow',
        'D_Yellow',
        'D_Red',

        'E_Yellow',
        'E_Yellow',
        'E_Red',

        'F_Red',
        'F_Red',

        'G_Red',

        'C_Yellow',
        ])
