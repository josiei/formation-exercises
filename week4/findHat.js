const dogs = {
  'Carter': ['Fido', 'Ivy'],
  'Ivy': ["HAT"], // Ivy has seen the hat
  'Loki': ['Snoopy'],
  'Pepper': ['Carter'],
  'Snoopy': ['Pepper'],
  'Fido': []
};

function findHat(dogs, bestFriend){
  let queue = [bestFriend];
  while(queue.length > 0){
    let current = queue.shift();
    for(let i = 0; i < dogs[current].length; i++){
      if(dogs[current][i] === "HAT") return current;
      queue.push(dogs[current][i]);
    }
  }
}
console.log(findHat(dogs, 'Loki')); // returns 'Ivy'
