// Given an input dictionary mapping from Fellows (as string names) to skill ratings (as integers), return the skill rating with the highest number of Fellows.
//{"oliver": 3, "pixel": 1, "pinky": 3} => 3

function highestSkillOverlap(input){
  const map = {};
  let greatest = 0;
  let skill;
  for(let key in input){
    if(map[input[key]]){
      map[input[key]] += 1;
    } else {
      map[input[key]] = 1;
    }
  }
  for(let key in map){
    if(map[key] > greatest){
      greatest = map[key];
      skill = key;
    }
  }
  return skill;
}

console.log(highestSkillOverlap({"oliver": 3, "pixel": 1, "pinky": 3}));
