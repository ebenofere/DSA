// Find the second largest number in an array
// >>> a more efficient way - O(n) time complexity, single pass
// third solution

function secondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have at least 2 elements";
  }

  // Initialize both variables to -Infinity to handle negative numbers correctly
  let largest = -Infinity;
  let secondLargest = -Infinity;

  // Single pass through the array - O(n) time complexity
  for (let i = 0; i < arr.length; i++) {
    // If current element is larger than our current largest
    if (arr[i] > largest) {
      // Move the current largest to second largest before updating
      secondLargest = largest;
      largest = arr[i];
    }
    // If current element is not the largest but is larger than second largest
    // This condition also handles duplicates of the largest number
    else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }

  // Note: Returns -Infinity if array has fewer than 2 distinct elements
  return secondLargest;
}

// Test array with various numbers including duplicates
let arr = [-5, 6, 4, -8, 10, 20, -12, 5, 19, 7, 20];
let result = secondLargest(arr);
console.log(result); // Expected output: 19 (second largest after 20)
