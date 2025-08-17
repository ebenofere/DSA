function eligibleToVote(age) {
  if (age < 18) {
    console.log("Not eligible to vote");
  } else {
    console.log("Eligible to vote");
  }
}

eligibleToVote(-1);
