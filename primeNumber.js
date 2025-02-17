function isPrime(n) {
	if (n<2) {
		return false
	}
	for(let i = 2; i <= Math.sqrt(n); i++){   /// i <= Math.sqrt(n) vs. i < n -- the difference between O(n) and O(sqrt(n))
		if(n%i === 0) {
			return false
		} 
	}
	return true
}

console.log((isPrime(1))) // false
console.log((isPrime(5))) // true
console.log((isPrime(4))) // false

//  Big-O = O(sqrt(n))