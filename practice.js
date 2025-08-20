// Write a function that returns the smallest number in an arry

function findSmallest(arr) {
  let max = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max) {
      max = arr[i];
    }
  }

  return max;
}

arr = [3, -7, 46, 70, -98, 67, -44, 20, 65, -17, 49, -60];
let result = findSmallest(arr);
console.log(result);
