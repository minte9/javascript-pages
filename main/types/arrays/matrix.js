/**
 * Multidimensional arrays
 */

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix[1][1]); // 5, central element


/**
 * Loops
 * 
 * The for ... of
 * is the prefered way to loop over items.
 * 
 * The for ... in
 * It iterate over all properties, not just numeric ones.
 * It is optimize for objects, it is 10-100 slower.
 */

for (let i=0; i<matrix.length; i++) { // classic loop
    console.log(matrix[0][i]); // 1, 4, 7
}

for (let item of matrix) {
    console.log(item[0]); // 1, 4, 7
}

for (let key in matrix) { // not recommended
    console.log(matrix[key][0]); // 1, 4, 7
}


/**
 * Length
 * 
 * It is actually not the count of values in array, 
 * is the greatest numeric index plus one.
 */

let vars = ["Orange"];
vars[123] = "Apple";

console.log(vars.length); // 124 - Look Here!