// Write a function that returns the largest number in an arry

function findLargest(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

arr = [3, -7, 46, 70, -98, 67, -44, 20, 65, -17, 49, -60];
let result = findLargest(arr);
console.log(result);
