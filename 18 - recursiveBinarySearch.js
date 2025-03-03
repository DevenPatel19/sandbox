/** RECURSIVE BINARY SEARCH
 * ! It's in the name - if you can't remember recursion go to # 13
 * !Problem Statemnet: Given a sorted array of 'n' elements and a target element 't', find the index of 't'
 * !                    the array, return -1 i the target element is not found.
 * 
 * arr = [-5, 2, 4, 6, 10], t = 10 => Should return 4
 * arr = [-5, 2, 4, 6, 10], t = 6 => Should return 3
 * arr = [-5, 2, 4, 6, 10], t = 20 => Should return -1
 */

arr =[-5, 2, 4, 6, 10]

function recursiveBinarySearch(array, target){
    return search(array, target, 0, array.length - 1)
}

function search(array, target, leftIndex, rightIndex){
    if (leftIndex > rightIndex){
        return - 1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if ( target === array[middleIndex]) {
        return middleIndex
    }

    if(target < array[middleIndex]) {
        return search(array, target, leftIndex, middleIndex - 1)
    }else {
        return search(array, target, middleIndex + 1, rightIndex)
    }
}

console.log(recursiveBinarySearch(arr, 10)) // 4
console.log(recursiveBinarySearch(arr, 6)) // 3
console.log(recursiveBinarySearch(arr, 20)) // -1


// Big O === O(logn)