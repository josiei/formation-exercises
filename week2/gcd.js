function gcd(a, b){
  let smaller;
  let larger;
  if(a <= b){
    smaller = a;
    larger = b;
  } else {
    smaller = b;
    larger = a;
  }
  function helper(sm, lg){
    if(sm === 0) return lg;
    if(lg === 0) return sm;

    if(smaller > 0 && larger > 0){
      let one = sm;
      let two = lg - sm;
      if(one >= two){
        return helper(two, one)
      }
      return helper(one, two);
    }
  }

  return helper(smaller, larger);
}

console.log(gcd(9, 27)) //== 9
console.log(gcd(27, 9)) //== 9
console.log(gcd(3, 1)) //== 1
console.log(gcd(0, 5)) //== 5
