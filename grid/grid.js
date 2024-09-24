

export default class Grid {
    constructor(rows, cols, cellValue) {
        this.rows = rows;
        this.cols = cols;
        this.cellValue = cellValue;
        this.grid = this.createGrid(rows, cols, cellValue);
    }

    createGrid(rows, cols, cellValue) {
        let grid = [];
        for (let i = 0; i < rows; i++) {
            grid.push([]);
            for (let j = 0; j < cols; j++) {
                if (cellValue || cellValue === null) {
                    grid[i].push(cellValue);
                }
                else {
                    grid[i].push(i * cols + j);
                }
            }
        }
        return grid;
    }

    _parsePosition(arg1, arg2) {
        // hvis arg1 er et objekt, så returner objekt med row og col
        if (typeof arg1 === "object") {
            return { row: arg1.row, col: arg1.col };
        }
        // ellers returner et objekt med row og col. På denne måde er row og col altid defineret som objektet {row: arg1, col: arg2}
        else {
            return { row: arg1, col: arg2 };
        }
    }

    // Tjek om positionen er inden for gridets grænser
    _isValidPosition(arg1, arg2) {
        // hvis arg1 er et objekt, så bruges parsePosition til at "udpakke" objektet til row og col
        const { row, col } = this._parsePosition(arg1, arg2);
        
        // returner true hvis row og col er inden for gridets grænser ellers returneres false
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }

    _isValidIndex(index) {
        const totalCells = this.rows * this.cols;
        return index >= 0 && index < totalCells;
    }

    set(arg1, arg2, arg3) {
        const { row, col } = this._parsePosition(arg1, arg2)

        // hvis positionen er gyldig...
        if (this._isValidPosition(row, col)) {
            // ...og arg1 er typen af objekt så indsættes arg2 som værdi og er arg1 IKKE et objekt så indsættes arg3 som værdi
            if (typeof arg1 === 'object') {
                this.grid[row][col] = arg2
            } else {
                this.grid[row][col] = arg3
            }
        } else {
            return undefined
        }
    }

    get(arg1, arg2) {
        const {row, col } = this._parsePosition(arg1, arg2)
        if (this._isValidPosition(row, col)) {
            return this.grid[row][col];
        } else {
            return undefined;
        }
    }

    indexFor(arg1, arg2) {
        if(this._isValidPosition(arg1, arg2)) {
            const { row, col } = this._parsePosition(arg1, arg2);
            return row * this.cols + col;
        } else {
            return undefined;
        }
    }

    rowColFor(index) {
        let i = 0

        if (this._isValidIndex(index)) {
            const row = Math.floor(index / this.cols) // 1
            const col = index % this.cols

            return {row, col}
        } else {
            return undefined;
        }
    }

    dump() {
        console.table(this.grid);
    }
}