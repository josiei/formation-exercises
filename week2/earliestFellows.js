//We have Fellows at Formation that are waiting for their resume to be reviewed. Given an input dictionary mapping from Fellow name to an integer representing the timestamp they requested a review, return an array of Fellows that arrived earliest (at the exact same time)
//examples
//{"oliver": 3, "pinky": 1, "pixel": 2, "tobey": 1} => ["pinky", "tobey"]

function earliestFellows(input) {
  let greatest = Number.POSITIVE_INFINITY;
  const output = [];
  for (let key in input) {
    if (input[key] < greatest) {
      greatest = input[key];
    }
  }

  for (let key in input) {
    if (input[key] === greatest) {
      output.push(key);
    }
  }
  return output;
}

console.log(earliestFellows({ oliver: 3, pinky: 1, pixel: 2, tobey: 1 }));
