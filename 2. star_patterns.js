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

let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < i + 1; j++) {
    row = row + "*";
  }

  console.log(row);
}
