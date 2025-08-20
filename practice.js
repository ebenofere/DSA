// Find the second largest number in an array

function secondLargest(arr) {
  let L = -Infinity;
  let SL = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > L) {
      L = arr[i];
    }
  }

  let newArr = arr.filter((num) => num !== L);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > SL) {
      SL = newArr[i];
    }
  }

  return SL;
}

let arr = [5, 6, 4, 8, 10, 20, 12, 5, 19, 7];
let result = secondLargest(arr);
console.log(result);
