export class SudokuSolver {
  static isNumberInRow(grid: number[][], value: number, row: number) {
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === value) return true;
    }
    return false;
  }
  static isNumberInColumn(grid: number[][], value: number, col: number) {
    for (let i = 0; i < 9; i++) {
      if (grid[i][col] === value) return true;
    }
    return false;
  }
  static isNumberInBox(
    grid: number[][],
    value: number,
    row: number,
    col: number
  ) {
    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (grid[i][j] === value) return true;
      }
    }
    return false;
  }
  static isValidPlacement(
    grid: number[][],
    value: number,
    row: number,
    col: number
  ) {
    return (
      !this.isNumberInRow(grid, value, row) &&
      !this.isNumberInColumn(grid, value, col) &&
      !this.isNumberInBox(grid, value, row, col)
    );
  }

  static solveBoard(grid: number[][]) {
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
        if (grid[row][column] === 0) {
          for (let numberToTry = 1; numberToTry <= 9; numberToTry++) {
            if (this.isValidPlacement(grid, numberToTry, row, column)) {
              grid[row][column] = numberToTry;
              if (this.solveBoard(grid)) {
                return true;
              }
              grid[row][column] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }
}
