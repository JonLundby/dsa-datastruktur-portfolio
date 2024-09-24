import Grid from "./grid.js";

// const grid = new Grid(3, 3, null); // grid med null som cellers value
const grid = new Grid(3, 3); // grid med cellers index value !!! --- passer til alle tests --- !!!
// const grid = new Grid(10, 10); // grid med cellers index value

// test set(row, col)
console.log("\n ----------- testing set -----------");

grid.set(1, 2, "Fem");
const setTest1 = grid.get(1, 2);
console.log(`grid value at (1,2) set to: ${setTest1}`); // expected: Fem

grid.set({ row: 0, col: 1 }, "Et");
const setTest2 = grid.get({ row: 0, col: 1 });
console.log(`grid value at (0, 1) set to: ${setTest2}`); // expected: Et

grid.set(100, 300, "uden for grid?");
const setTest3 = grid.get({ row: 100, col: 300 });
console.log(`grid value at (100, 300) set to: ${setTest3}`); // expected: undefined

grid.set({ row: 300, col: 100 }, "uden for grid?");
const setTest4 = grid.get({ row: 300, col: 200 });
console.log(`grid value at (300, 100) set to: ${setTest4}`); // expected: undefined

// test get(row, col)
console.log("\n ----------- testing get -----------");
const gridValue = grid.get(1, 2);
console.log(`gridValue is ${gridValue}`); // expected: 8

// test indexfor()
console.log("\n ----------- testing indexfor -----------");
const index = grid.indexFor(2, 1);
console.log(`Index is ${index}`); // expected: 7

// test rowColFor(index)
console.log("\n ----------- testing rowColFor -----------");
const gridCoordinate = grid.rowColFor(3);
console.log(`Grid coordinate at index: ${JSON.stringify(gridCoordinate)}`); // expected: {row: 1, col: 0}
const gridCoordinateInvalid = grid.rowColFor(8000);
console.log(`Grid coordinate at index: ${JSON.stringify(gridCoordinateInvalid)}`); // expected: undefined

// test neighbours
console.log("\n ----------- testing neighbours -----------");
const neighbours = grid.neighbours(2, 2);
console.log(neighbours);

// test neighbourValues( row, col )
console.log("\n ----------- testing neighbourValues -----------");
const neighboursValues = grid.neighbourValues(1, 1);
console.log(neighboursValues);

// test nextInRow( row, col )
console.log("\n ----------- testing nextInRow -----------");
const nextCellInRow = grid.nextInRow(0, 0);
console.log(nextCellInRow); // expected {0, 1, 'Et'}
// const nextCellInRow = grid.nextInRow(20, 22)
// console.log(nextCellInRow) // expected undefined

// test nextInCol(arg1, arg2)
console.log("\n ----------- testing nextInCol -----------");
const nextCellInCol = grid.nextInCol(0, 2);
console.log(nextCellInCol); // expected {1, 2, 'Fem'}
// const nextCellInCol = grid.nextInCol(30, 32)
// console.log(nextCellInCol); // expected undefined

console.log("\n ----------- testing north -----------");
// test north(row, col)
const north = grid.north(1, 1);
console.log(north); // expected {0, 1, 'Et'}
// const north = grid.north(0, 1);
// console.log(north); // expected undefined

console.log("\n ----------- testing south -----------");
// test south(row, col)
const south = grid.south(1, 1);
console.log(south); // expected {2, 1, 7}
// const south = grid.south(2, 1);
// console.log(south); // expected undefined

console.log("\n ----------- testing west -----------");
// test west(row, col)
const west = grid.west(1, 1);
console.log(west); // expected {1, 0, 3}
// const west = grid.west(0, 0);
// console.log(west); // expected undefined

console.log("\n ----------- testing east -----------");
// test east(row, col)
const east = grid.east(1, 1);
console.log(east); // expected {1, 2, 'Fem'}
// const east = grid.east(0, 2);
// console.log(east); // expected undefined

// dump
grid.dump();
