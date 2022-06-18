/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function(secret, guess) {
  let bulls = 0;
  let buckets = [0,0,0,0,0,0,0,0,0,0];
  let possibleCows = 0;

  for(let i = 0; i < secret.length; i++){
      if(secret[i] === guess[i]){
          bulls += 1;
      } else {
          buckets[secret[i]] += 1;
          buckets[guess[i]] -= 1;
      }
  }

  for(let i = 0; i < buckets.length; i++){
      if(buckets[i] > 0){
          possibleCows += buckets[i];
      }
  }

  return `${bulls}A${secret.length - bulls - possibleCows}B`
};

console.log(getHint())
