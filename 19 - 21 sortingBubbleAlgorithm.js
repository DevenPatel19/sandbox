/** BUBBLE SORT
 * !Problem Statement: Given an array of integers, sort the array
 *
 *  const arr = [-6, 20, 8, -2, 4]
 *
 *  bubbleSort(arr) => Should return [-6, -2, 4, 8, 20]
 *
 * *NOTE -  Worst Sort Algo
 *
 */

const arr = [8, 20, -2, 4, -6];

function bubbleSort(arr) {
  // Compare adjacent elements in the array and swap the positions if they are not in the intedned order
  // Repeat the instruction as you step through each element in the array
  // Once you step through the whole array with no swaps, he array is sorted
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

bubbleSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]

// Big O = O(n^2) = nested loops = quadratic
