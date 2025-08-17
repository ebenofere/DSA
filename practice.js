// a program to spot the even numbers in a given array
let arr = [10, 4, 5, 7, 3, 2, 9, 1];

for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(`this number ${arr[i]} is an even number`);
  }
}
