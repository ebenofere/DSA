// star patterns

let n = 4;
for (let i = 0; i < n; i++) {
  row = ""; // note: The empty string value here doesn’t print as a visible space—it contributes nothing. What prints is just the "*" symbol.
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }

  console.log(row);
}

// ------------------------------------------------------------------------------------------------------------------

// for (let i = 0; i < 1; i++) {
//   row = " ";

//   for (let j = 0; j < 4; j++) {
//     row = row + "*";
//     console.log(row);
//   }
// }
