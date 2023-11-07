// Bitwise AND (&) operation:

let number1 = 9; // Binary representation: 1001

console.log(number1, number1.toString(2), 4 >> 1);

// // Check if the second bit from the right (2^1) is set
// if ((number1 & (1 << 1)) !== 0) {
//   console.log("The second bit is set.");
// } else {
//   console.log("The second bit is not set.");
// }

// Bitwise OR (|) operation:

// let number2 = 5; // Binary representation: 0101

// // Set the third bit from the right (2^2) to 1
// number2 = number2 | (1 << 2); // Binary result: 1101 (13 in decimal)

// console.log("Modified number 2: " + number2);

// Bitwise XOR (^) operation:

// let number3 = 12; // Binary representation: 1100

// // Toggle the second bit from the right (2^1)
// number3 = number3 ^ (1 << 1); // Binary result: 1110 (14 in decimal)

// console.log("Modified number 3: " + number3);

// Bitwise shifting (<< and >>) operations:

// let number4 = 8; // Binary representation: 1000

// // Left shift by 2 positions (multiply by 2^2)
// let leftShifted = number4 << 2; // Binary result: 100000 (32 in decimal)

// // Right shift by 1 position (divide by 2)
// let rightShifted = number4 >> 1; // Binary result: 100 (4 in decimal)

// console.log("Left shifted: " + leftShifted);
// console.log("Right shifted: " + rightShifted);
