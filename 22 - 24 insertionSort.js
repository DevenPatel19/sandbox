/** INSERTION SORT
 * !Problem Statement: Given an arra, sorth the array.
 * 
 * const arr = [-6, 20, 8, -2, 4]
 * 
 * *Concept: virtually split array into sorted and unsorted. Assume that 1st element is already sorted and remaining
 * *    are unsorted. Select an unsorted element and compare with all elelemnts in the sorted part. If elements in
 * *    the sorted part is smalled than the selected element, proceed to the next element in the unsorted part. Else,
 * *    shift larger elements in the sorted part towards the right. Insert the selected element at the right index. 
 * *    Repeat until all elements are placed in the correct order.
 * 
 */


function insertionSort(arr) {
    for(let i=1; i = arr.length-1; i++){
        if(arr[i]<arr[i-1]){
           
        } 
    }
    return arr
}


const arr = [ -6, 20, 8, -2, 4]
insertionSort(arr)
console.log(arr) / [ -6, -2, 4, 8, 20]