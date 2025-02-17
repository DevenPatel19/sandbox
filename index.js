

//  // Function to add 7 to a number
//  function add7(number) {
// 	return number + 7;
// }

// // Function to multiply two numbers
// function multiply(a, b) {
// 	return a * b;
// }

// // Function to capitalize the first letter of a string
// function capitalize(str) {
// 	if (str.length === 0) return '';
// 	return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }

// // Function to get the last letter of a string
// function lastLetter(str) {
// 	if (str.length === 0) return '';
// 	return str[str.length - 1];
// }

// console.log("add7(5):", add7(5)); // Should return 12
// 		console.log("multiply(3, 4):", multiply(3, 4)); // Should return 12
// 		console.log('capitalize("hello"):', capitalize("hello")); // Should return "Hello"
// 		console.log('capitalize("wORLD"):', capitalize("wORLD")); // Should return "World"
// 		console.log('lastLetter("abcd"):', lastLetter("abcd")); // Should return "d"


// function helloWorld () {
// 	console.log ("Hello World!");
// }

// helloWorld();



// ****************************************

/*consider a sumOfTripledEvens function. It will:

1.Take in an array.
2. For every even number, it will triple it.
3. Then it will sum all those even numbers.*/

// //  Implement a function like that using pseudocode and then add the code to it
// // pCode START : Instantiate function parameters array obj "arr"
// function sumOfTripledEvens(arr) {
//     // pCode: Instantiate  "sum" variable // let sum = 0 
//     let sum = 0;
//     // pCode: Iterate through through "arr" index (start) [0] until (stop)length-1 is met,(step)i++ once complete GOTO pCode RETURN.
//     // pCode: Catch parameter of array length in variable "i"
//     for (let i=0; i>= arr.length; i++){
//         // pCode: test each value to see if it is even or odd ('arr[i]%2===0') if 'true' GOTO pCode EVEN if  'false' GOTO pCode ODD
//         if (arr[i] % 2 === 0){
//             // pCode EVEN : 'sum' += arr[i]*3 and i++
//             const tripleEven =+ arr[i]*3; 
//             // pCode: add to sum
//             sum += tripleEven;
//         }
//         // pCode ODD: continue
//         // pCode RETURN : return sum
//         return sum;
//     }
// }


// Rewrite the above sumOfripleEvens using .map(), .filter(), and .reduce() Array methods

function sumOfTripledEvens(arr){
    return arr
        .filter((num) => num % 2 === 0)
        .map((num) => num *3 )
        .reduce((acc, curr) => acc + curr );
}