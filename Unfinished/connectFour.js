/*  */
    // The grid is 6 row by 7 columns, those being named from A to G.
    // You will receive a list of strings showing the order of the pieces which dropped in columns:
    // The list may contain up to 42 moves and shows the order the players are playing.
    // The first player who connects four items of the same color is the winner.
    // You should return "Yellow", "Red" or "Draw" accordingly.

let grid = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
];
const letters = { 'A':0, 'B':1, 'C':2, 'D':3, 'E':4, 'F':5, 'G':6 };

function whoIsWinner(moves) {
    for (let i = 0; i < moves.length; i++) {
        moves[i] = moves[i].split('_');
        if (moves[i][1] == 'Red') moves[i][1] = 1;
        else moves[i][1] = 2; 
    }; // console.log('Moves', moves);

    for (let j = 0; j < moves.length; j++) { // For every move
        for (let k = 0; k < 7; k++) {
            if (grid[letters[moves[j][0]]][k] == 0) {
                grid[letters[moves[j][0]]][k] = moves[j][1]; // grid[letters[moves[j][0]]][k] is the number put into the grid
                if ((grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]][k-1]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]][k-2]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j][0]]][k-3])) { // If the newest input is equal to the 3 numbers to the left of it, or the 3 numbers diagonally to it
                    if (moves[j][1] == 1) return 'Red'
                    else return 'Yellow';
                } else if (k > 3) {
                    if ((grid[letters[moves[j][0]]][k] == grid[letters[moves[j-1][0]]][k-1]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j-2][0]]][k-2]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j-3][0]]][k-3])) {
                        if (moves[j][1] == 1) return 'Red'
                        else return 'Yellow';
                    }
                } else if (k < 3) {
                    if ((grid[letters[moves[j][0]]][k] == grid[letters[moves[j+1][0]]][k-1]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j+2][0]]][k-2]) && (grid[letters[moves[j][0]]][k] == grid[letters[moves[j+3][0]]][k-3])) {
                        if (moves[j][1] == 1) return 'Red'
                        else return 'Yellow';
                    }
                }
                break;
            }
        }
    }
    console.log('Final', grid);
    return 'Draw';
}
whoIsWinner(["C_Yellow",
          "E_Red",
          "G_Yellow",
          "B_Red",
          "D_Yellow",
          "B_Red",
          "B_Yellow",
          "G_Red",
          "C_Yellow",
          "C_Red",
          "D_Yellow",
          "F_Red",
          "E_Yellow",
          "A_Red",
          "A_Yellow",
          "G_Red",
          "A_Yellow",
          "F_Red",
          "F_Yellow",
          "D_Red",
          "B_Yellow",
          "E_Red",
          "D_Yellow",
          "A_Red",
          "G_Yellow",
          "D_Red",
          "D_Yellow",
          "C_Red"])
// Yellow is the winner