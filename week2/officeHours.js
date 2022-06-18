/*
[1, 2, 3]

// // Permutations:
// [
//  [1, 2, 3],
//  [1, 3, 2],

//  [2, 3, 1],
//  [2, 1, 3],

//  [3, 1, 2],
//  [3, 2, 1]
// ]

[1, 2, 3, 4]

[1, (all the permutations of 2, 3, 4)]
[2, (all the permutation of 1, 3, 4)]



//                    []
//           [1]                    [2]      [3]
//    [1,2]        [1,3]
//  [1,2,3]        [1,3,2]
// */

function permutations(input) {
  const output = [];
  const stack = [];

  function recursiveHelper() {
    if (stack.length === input.length) {
      output.push([...stack]);
      return;
    }

    // Iterate through the remaining values
    //    push a value
    //    recursive call
    //    pop()
  }

  return output;
}

// function genericBacktracking() {
//   // if base case
//   //    do something
//   //    return
//   // for each possible choice
//   //      make a recursive call
//   // merge results from recursive calls
//   // return
// }

//deque ? deck?

function hotPotato(people, k) {
  while (people.length > 2) {
    // simulate another round.

    for (let i = 0; i < k; i++) {
      const next = people.shift(); // dequeue
      if (i !== k - 1) {
        people.push(next); // enqueue
      }
    }
    // The next person is out!
    //people.shift(); // dequeue
  }

  return people.shift(); // dequeue
}

console.log(hotPotato(["James", "Jason", "Naoko", "Lenny", "Kent", "Linda"], 8));
console.log(hotPotato(["James", "Naoko", "Jason"], 2));

// James => Naoko => Jason
// James => Naoko => James
// Naoko
