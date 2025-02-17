//  Codevolution DSA video 7 - https://youtu.be/tQjd29Rmo_A?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP
/* Fibonacci Sequence 

Problem: Given a number 'n', find the first 'n' elements of the Fibonacci sequence

Note: In mathematics the Fibonacci sequence is a sequence of in which each number
is the sum of the two preceding ones

the first two numbers in the sequence are 1 and 2

*/

// /*  --> COMMENT OUT TO ACTIVATE BELOW

 // Non-recursive solution

 function fibonacci(n){
	const fib = [0,1]					// Big O notation calc = 1

	for (let i=2; i<n; i++) {
		fib[i] = fib[i-1] + fib[i-2]  	// Big O notation calc = n
	}
	return fib							// Big O notation calc = 1
 }

 										// Big-O = O(n) + 2 or O(n)




// Function Tests
console.log("Fibonacci Sequence Test")
console.log(fibonacci(2) + " = [0,1]")
console.log(fibonacci(3) + " = [0,1,1]")
console.log(fibonacci(7) + " = [0,1,1,2,3,5,8]");

// */
/*

//  Codevolution DSA Video 8  -  https://youtu.be/vAgzuS3u6W0?list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP

//  Factorial of a  number
//  Problem : Give an integer 'n', find  the factorial of that integer

Note: In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the roduct
of all positive inegers less tha or equal to 'n'.

Factorial of zero is 1

*/  //-->  REMOVE FIRST COL TO DEACTIVATE BELOW

function factorial(n){
	let result = 1					// Big O notation calc = 1
	for(let i=2; i<=n; i++){		
		result = result * i			// Big O notation calc = n
	}
	return result					// Big O notation calc = 1
	
}

// Big-O = O(n) + 2 or O(n)

//  Function Tests

console.log("\nFactorial Sequence Test")
console.log(factorial(0) + " = 1")
console.log(factorial(1) + " = 1")
console.log(factorial(5) + " = 120")