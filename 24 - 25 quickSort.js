/** QUICKSORT 
 * ! Problem Statement: Given an array of integers, sort the array.
 * 
 * * Arrays can be ascending and/or descending
 *  const arr = [-6, 20, 8 , -2, 4]
 * 
 *  quickSort(arr) => Should return [-6, -2, 4, 8, 20]
 * 
 * * Identify the pivot element in the array:
 * *  - Pick first element as pivot
 * *  - Pick last element as pivot(Our approach)
 * *  - Pick a random element as pivot
 * *  - Pick median as pivot
 * 
 * * Put everything that's smaller than the pivot into a 'left' array and everytihng that's greater than the pivot into
 * *  a 'right' array
 * 
 * * Repeat the process for the indvidual 'left' and 'right' arrays till you have an array of length 1 which is sorted
 * *  by definition
 * 
 * * Repeatedly concatenate the left array, pivot and right array till one sorted array remains
 */

function quickSort(arr){
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i = 0; i < arr.length-1; i++){                    //   Avg - 'For Loop' = O(n)
        if(arr[i] < pivot){
            left.push(arr[i])
        } else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]   //   Avg - recursively divide the array into smaller arrays
                                                              //   O(logn)
    
}

const arr = [-6, 20, 8 , -2, 4]

console.log(quickSort(arr)) // [-6, -2, 4, 8, 20]

// TODO: Run through with ascending and descending BY HAND to get better a understanding BY HAND SERIOUSLY

 // Worst case - Big O = O(n^2) = linear quadratic time/space complexity (happens when ascending sorting)
 //* Average case - Big O = = O(n) * O(logn) = O(nlogn) = linear quadratic time/space complexity (happens when 
 // ascending sorting) see side of algo notes(Avg):