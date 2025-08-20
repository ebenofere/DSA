// Find the second largest number in an array

function secondLargest(arr) {
  // Initialize variables to track largest and second largest
  // Using -Infinity ensures any number in the array will be larger
  let largest = -Infinity;
  let secondLargest = -Infinity;

  // First loop: Find the largest number in the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Update largest when we find a bigger number
    }
  }

  // Create a new array excluding all instances of the largest number
  // This removes duplicates of the largest value
  let newArr = arr.filter((num) => num !== largest);

  // Second loop: Find the largest number in the filtered array
  // This will be our second largest from the original array
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > secondLargest) {
      secondLargest = newArr[i];
    }
  }

  // Return the second largest number found
  return secondLargest;
}

let arr = [-5, 6, 4, -8, 10, 20, -12, 5, 19, 7, 20];
let result = secondLargest(arr);
console.log(result);
