// Write a function that searches for an element in an array and returns the index.
// If the element is not present, then just return -1

function searchElement(arr, num) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let num = 4;
let elementFinder = searchElement(arr, num);
console.log(elementFinder);
