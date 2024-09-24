import Grid from "./grid.js";

// const grid = new Grid(3, 3, null); // grid med null som cellers value
const grid = new Grid(3, 3); // grid med cellers index value !!! --- passer til alle tests --- !!!
// const grid = new Grid(10, 10); // grid med cellers index value

// test set(row, col)
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
const gridValue = grid.get(2, 2);
console.log(`gridValue is ${gridValue}`); // expected: 8

// test indexfor()
const index = grid.indexFor(2, 1);
console.log(`Index is ${index}`); // expected: 7

// test rowColFor(index)
const gridCoordinate = grid.rowColFor(3);
console.log(`Grid coordinate at index: ${JSON.stringify(gridCoordinate)}`); // expected: {row: 1, col: 0}
const gridCoordinateInvalid = grid.rowColFor(8000);
console.log(`Grid coordinate at index: ${JSON.stringify(gridCoordinateInvalid)}`); // expected: undefined

// dump
grid.dump();
