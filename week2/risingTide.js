//Given an array of Fellows representing nominations for a Rising Tide Award at Formation, return the name of the winning Fellow with the most number of nominations

//["oliver", "pixel", "pinky", "pixel"] => "pixel"

function risingTideWinner(nominations){
  let greatest = Number.NEGATIVE_INFINITY;
  let map = {}
  let output = [];

  for(let nominee of nominations){
    map[nominee] = map[nominee] || 0;
    map[nominee] += 1;
    if(map[nominee] > greatest){
      greatest = map[nominee]
    }
  }

  for(let key in map){
    if(map[key] === greatest){
    output.push(key);
    }
  }

output.sort()
return output[output.length - 1];
}

console.log(risingTideWinner(["oliver", "pixel", "pinky", "pixel"]))

//Formation Solution
function risingTide(nominations) {
  let winner = "";
  let winningVotes = 0;
  const votes = {};
  for (const fellow of nominations) {
    votes[fellow] = (votes[fellow] || 0) + 1;
    if (votes[fellow] >= winningVotes && fellow > winner) {
      winner = fellow;
      winningVotes = votes[fellow];
    }
  }
  return winner;
}

console.log(risingTide(["oliver", "pixel", "pinky", "pixel"]))
