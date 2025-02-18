/**
 * Factorial
 * Give an integer  'n', find the find the factorial of that integer
 * 
 *  The Factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less
 *  than or equal to 'n'
 *  The factorial of zero is 1
 * 
 * factorial(4) = 24
 * factorial(5) = 120
 *
*/

function factorial(n) {
 let result =  1                        // Big O 1
 for(let i=2; i <= n; i++){             // Big O N
     result *= i
    }
    return result                       // Big O 1
 }
 
 
 console.log(factorial(1))
 console.log(factorial(1))
 console.log(factorial(4))
 console.log(factorial(5))
 
 /**
  * Steps to solve:
  * 1.Create function signature (function name(variables){})
  * 
  * 2. Create a constant to hold to answer we will generate since it is a product of numbers,
  * lets use a variable to carry over the previous product
  * 
  * 3. Since we need to generate more numbers and multiply them by the previous product, lets setup a 'jig'
  *  with a 'For Loop' to progressively calc the value
  *  3a. we will start with i=2  because  0 and 1 are pre calculated..
  *  3b. we make sure we keep going as long as i <= n because that is the parameter give by the user and is inclusive
  *  3c. we use i++ because each loop through we want the next number so we increment by 1
  * 
  * 4. During each loop through we will want to calc the numbers so we set the referential formula 
  *      for the next factorial number in the sequence to multiply to the current product
  * 
  * 5. Then we can return the answer.
  * 
  * 6. We then add some test calls
  * 
  * 7. Determine Big O ---- based on side notes Big O = O(n) = Linear time
  */