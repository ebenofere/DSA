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

// a program to spot the even numbers in a given array
let arr = [10, 4, 5, 7, 3, 2, 9, 1];

for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(`this number ${arr[i]} is an even number`);
  }
}
