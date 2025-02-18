/**
 * Primality
 * * Problem
 * Given a natural number  'n', determine if the number is prime or not
 * 
 *  A Prime number is a natural number greter than 1 that is not a product of two smaller natural numbers
 * 
 * prime(4) = false (1*4 or 2*2 or 4*1)
 * prime(5) = true (5*1 or 1*5)
 *
*/

function isPrime(n) {
    if(n < 2){                              // Big O = n
        return false                        // big O = 1
    }
    for (let i =2; i < n ; i++){            // Big O = n
        if(n%i === 0){                      // Big O = n
            return false                    // Big O = 1
        }
        return true                         // Big O = 1
    }
}
    
    
    console.log(isPrime(1)) // false
    console.log(isPrime(4)) // false
    console.log(isPrime(5)) // true
    
    /**
     * 
     * *Steps to solve:
     * 1.Create function signature (function name(variables){})
     * 
     * 2. Create an edge case test to ensure n is positive and greater than 1 
     * 
     * 3. We want to then test to see if any numbers will divide into our given parameter of n,
     *      so we setup a jig with a for loop
     *  3a. starting with 2 and stopping just before n, we will step through each number 1 by 1 
     * 
     * 4. During each loop through we will want to calc the numbers so we calc the numbers using
     *      modulo operator to verify is the value is exactly zero. if it doesn't then false if it does true
     * 
     * 5. We then add some test calls
     * 
     * 6. Determine Big O ----> based on side notes Big O = O(n) = Linear time
     */



    /**
     * *Optimized Primatlity Test
     * Integers larger than the squaare root do not need to be checked because, whenever 'n=a*b', one of 
     * the two factors 'a' and 'b' is less than or equal to the square root of 'n'
     * 
     * n=24, a=4 and b=6
     * 
     * The square root of 24 is 4.89
     * a is less than the square root of n
     * 
     * a is less than the square root of n
     * 
     * n=35, a=5 and b=7
     * 
     * square root of 35 is 5.91
     * 5 is less tan 5.91
     * 
     * * Big O Changes: 
     * The change is that when 'n' is a 1000 we only check up to 100,
     * this gives us a O(sqrt(n))
     */

    function isPrimeOptimized(n) {
        if(n < 2){
            return false
        }
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0) {
                return false
            }
        }
        return true
    }


    console.log(isPrimeOptimized(1) + " = false") // false
    console.log(isPrimeOptimized(4) + " = false") // false
    console.log(isPrimeOptimized(5) + " = true") // true