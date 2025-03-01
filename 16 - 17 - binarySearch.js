/**
 * ! Problem Statement: given a SORTED array of 'n' elements and a target element 't', find the index of 't' in the
 * ! array, return -1 if the target element is not found.
 * Must be sorted, if given unsorted you must try linear or sort the array and apply binary.
 * 
 * arr = [-5, 2, 4, 6, 10 ], t = 10 => Should return 4
 * arr = [-5, 2, 4, 6, 10 ], t = 6 => Should return 3
 * arr = [-5, 2, 4, 6, 10 ], t = 20 => Should return -1
 * 
 */
arr = [-5, 2, 4, 6, 10] 

function binarySearch(arr, target){
// If the array is empty, return -1
// If the array has elements, find the middle, if it is equal to target then return the middle element index
// If target is less than the middle element, binary search left half of the array.
// If taret is greater than the middle element, binary search the right half of the array.
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]) {
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        } else{
            leftIndex = middleIndex + 1
        }
    }
    return -1
}



console.log(binarySearch(arr,10 ))  // 4
console.log(binarySearch(arr,6 ))  //  3
console.log(binarySearch(arr, 20 ))  // -1


/**
 * Big O notation = O(n) === O(logn)
 */