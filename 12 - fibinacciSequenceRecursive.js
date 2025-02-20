/**
 * *Problem - Give a number 'n', find the nth element of the Fibonacci sequence
 * * In mathematics, the Fib sequence is a seequence in which each number is the sum of the two preceding ones.
 * F(n) = F(n-1) + F(n-2)
 */

function recursiveFibonacci(n){
    if(n < 2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}


console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(6)) // 8

/** 0(n) = Iterative
 * O(2^n) = Recursive
 *  Boo! this is a bad thing because each loop doubles the requests vs halving the inputs like O(logn)
 */