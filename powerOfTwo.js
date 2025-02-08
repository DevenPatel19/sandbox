/** 
 * Power of TWO Problem
 *  Give a positive integer 'n', determine if the number is a power of 2 or not
 *  An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x.
 *  isPowerOfTwo(1) = true (2^0)
 *  isPowerOfTwo(2) = true (2^1)
 *  isPowerOfTwo(5) = false)
 */ 

function isPowerOfTwo(n) {
 if (n < 1) {
	return false
 }
 while (n > 1) {
	if(n % 2 !== 0) {
		return false
	}
	n = n/2
 }
 return true
}


/**
 * Big-O = O(logn) 
 * normally it would be linear due to loop but,
 * input size is reduced by half each time. (see n = n/2)
 */

console.log(isPowerOfTwo(1)) // True
console.log(isPowerOfTwo(2)) // True
console.log(isPowerOfTwo(5)) // False
console.log(isPowerOfTwo(8)) // False