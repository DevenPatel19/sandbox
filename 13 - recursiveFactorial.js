/**
 * *Problem: Give an integer 'n', find the factorial of that integer
 * 
 * ! The factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or
 * ! equal to 'n'
 * 
 * Factorial of zero is 1
 * factorial(4) = 4*3*3*2*1 = 24
 * factorial(5) = 5*4*3*2*1 =120
 */

function factorialRecursive(n){
    if(n === 0 ){
        return 1
    }
    return n * factorialRecursive(n-1)
}

console.log(factorialRecursive(0)) // 1
console.log(factorialRecursive(1)) // 1
console.log(factorialRecursive(4)) // 24
console.log(factorialRecursive(5)) // 120

/**
 * 1. breakdown factorial into most basic step it is the number multiplied by the previous value
 *      n * (n-1)
 * 2. call the function itself in this we subsitue the function into the formula
 *  n * factorialRecursive(n-1)
 * 
 * 3. Ensure a base case is made, we do not go into negatives here so we start with the case of n being equal to 0
 *  3.1. we assign that expression a value of 1, verify with math proofs if you don't trust me lol
 * 
 * 4. Calc Big O notation = O(n) because each time you call a function you call it another time.
 */