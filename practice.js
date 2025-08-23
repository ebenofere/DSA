// Full Nested Loop (All Combinations of i and j)
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`i is ${i} and j is ${j}`);
  }
}

// Nested Loop with Inner Loop Limited by i (Triangular Pattern)
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log(`i is ${i} and j is ${j}`);
  }
}

// Nested Loop with Inclusive Inner Bound (Triangular Pattern with Diagonal)
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(`i is ${i} and j is ${j}`);
  }
}

// Nested Loop with Decreasing Inner Counter (Reverse Triangular Pattern)
for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log(`i is ${i} and j is ${j}`);
  }
}

// Nested Loop with Decreasing Outer Counter (Inverted Triangle Pattern)

for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(`i is ${i} and j is ${j}`);
  }
}
