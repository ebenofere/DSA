// Write a function that searches for an element in an array and returns the index.
// If the element is not present, then just return -1

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function searchElement(arr, num) {
  for (i = 0; i < arr.length; i++) {
    if (arr[num] == num) {
      console.log(`the index of ${arr[i]} is ${i} `);
    } else {
      console.log("-1");
    }
  }
}
searchElement(arr, 0);
