/**
 * Fibonacci Sequence
 * Give a number 'n', find the first 'n' elements of the Fibonacci Sequence
 * 
 * The Fib seq is a sequence in which each number is the sum of the two preceding ones.
 * The first 2 numbers in the sequence are 0 and 1.
 * 
 * fibonacci(2) = [0,1]
 * fibonacci(3) = [0,1,1]
 * fibonacci(2) = [0,1,1,2,3,5,8]
*/

function fibonacci(n) {
   const fib = [0, 1]                     // Big O 1
for(let i=2; i <n; i++){                  // Big O N
    fib[i] = fib[i-1] + fib[i-2]
   }
   return fib                             // Big O 1
}


console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))

/**
 * Steps to solve:
 * 1.Create function signature (function name(variables){})
 * 
 * 2. Create a constant to hold to answers we will generate since it is a sequence of numbers,
 * lets use an array and call it fib and populate it with whta we know (0,1)
 * 
 * 3. Since we need to generate more numbers and push them into the array, lets setup a 'jig'
 *  with a 'For Loop' to add to the array
 *  3a. we will start with i=2  because array locations 0 and 1 are pre filled.
 *  3b. we make sure we keep going as long as i < n because that is the parameter give by the user
 *  3c. we use i++ because each loop through we want the next spot forward so we increment by 1
 * 
 * 4. During each lopp through we will want to calc the numbers so we set the referential formula 
 *      for the next fib number in the sequence into the hlding array
 * 
 * 5. Then we can return the array as an answers.
 * 
 * 6. We ten add some test calls
 * 
 * 7. Determine Big O ---- based on side notes Big O = O(n) = Linear time
 */