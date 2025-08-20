// database
let Africa = {
  id: 13,
  country: "Nigeria",
  capital: "Abuja",
  calling_code: "+234",
  demonym: "NGA",
  president: "Bola Ahmed Tinubu",
  isRich: false,
};

console.log(!Africa.isRich);

// ------------------------------------------------------------------------------------------------------------------

// a program to determine suffrage eligibility
function eligibleToVote(age) {
  if (age < 0) {
    console.log("Invalid input");
  } else if (age < 18) {
    console.log("Not eligible to vote");
  } else {
    console.log("Eligible to vote");
  }
}

eligibleToVote(-1);
eligibleToVote(0);
eligibleToVote(15);
eligibleToVote(50);

// ------------------------------------------------------------------------------------------------------------------

//  create a function to check if a number is even or odd

function isEvenOrOdd(num) {
  if (num == 0) {
    console.log("this number is 0; and therefore is neither even nor odd");
  } else if (num % 2 == 0) {
    console.log("this number is an even number");
  } else {
    console.log("this number is an odd number");
  }
}
isEvenOrOdd(-1);
isEvenOrOdd(0);
isEvenOrOdd(5);
isEvenOrOdd(8);

// ------------------------------------------------------------------------------------------------------------------

// For Loop
let arr = [10, 4, 5, 7, 3, 2, 9, 1];

let length = arr.length;

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// ------------------------------------------------------------------------------------------------------------------

// Check and Print Even Numbers in an Array
let arr = [10, 4, 5, 7, 3, 2, 9, 1];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(`this number ${arr[i]} is an even number`);
  }
}

// ------------------------------------------------------------------------------------------------------------------

// Write a function that searches for an element in an array and returns the index.
// If the element is not present, then just return -1

function searchElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let num = 4;
let elementFinder = searchElement(arr, num);
console.log(elementFinder);

// ------------------------------------------------------------------------------------------------------------------

// Write a function that returns the number of negative numbers in an array
// This function loops through an array, counts how many elements are negative, and returns that count.

function CountNegative(arr) {
  // initialize inside the function
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    // check strictly for negatives
    if (arr[i] < 0) {
      count += 1;
    }
  }

  return count;
}

let arr = [3, -7, 46, 70, -98, 67, -44, 20, 65, -17, 49, -60];

let result = CountNegative(arr);

console.log(result);

// ------------------------------------------------------------------------------------------------------------------

// Write a function that returns the largest number in an arry

function findLargest(arr) {
  let max = -Infinity;
  // let max = arr[o]; // alternatively, this works also

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

let arr = [3, -7, 46, 70, -98, 67, -44, 20, 65, -17, 49, -60];
let result = findLargest(arr);
console.log(result);

// ------------------------------------------------------------------------------------------------------------------

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

let arr = [3, -7, 46, 70, -98, 67, -44, 20, 65, -17, 49, -60];
let result = findSmallest(arr);
console.log(result);

// ------------------------------------------------------------------------------------------------------------------

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

let arr = [5, 6, 4, 8, 10, 20, 12, 5, 19, 7];
let result = secondLargest(arr);
console.log(result);

// ------------------------------------------------------------------------------------------------------------------

// Find the second largest number in an array
// >>> a more efficient way - O(n) time complexity, single pass
// second solution

function secondLargest(arr) {
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
    else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  // Note: Returns -Infinity if array has fewer than 2 distinct elements
  return secondLargest;
}

// Test array with various numbers including duplicates
let arr = [5, 6, 4, 8, 10, 20, 12, 5, 19, 7];
let result = secondLargest(arr);
console.log(result); // Expected output: 19 (second largest after 20)
