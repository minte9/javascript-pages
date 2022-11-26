/**
 * Multidimensional arrays
 * 
 * The for ... of is the prefered way to loop
 * The for ... in is optimize for objects, 10-100 slower
 * 
 * Length, actually not the count of values in array, 
 * is the greatest numeric index plus one
 */

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix[1][1]); // 5 (central element)


for (let i=0; i<matrix.length; i++) {
    console.log(matrix[0][i]); // 1 4 7
}

for (let item of matrix) {
    console.log(item[0]); // 1 4 7
}

for (let key in matrix) { // slower
    console.log(matrix[key][0]); // 1, 4, 7
}

matrix.forEach((val, key, arr) => {
    console.log(val.toString());
        // 1, 2, 3
        // 4, 5, 6
        // 7, 8, 9
});

let vars = ["Orange"];
vars[123] = "Apple";
console.log(vars.length); // 124 - Look Here