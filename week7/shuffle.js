/**
 * @param {number[]} nums
 */

// The idea is to start from the last element and swap it with a randomly selected element from the whole array (including the last). Now consider the array from 0 to n-2 (size reduced by 1), and repeat the process till we hit the first element.

var Solution = function(nums) {
  this.original = new Array(...nums);
  this.nums = nums;
};

/**
* @return {number[]}
*/
Solution.prototype.reset = function() {
  return this.original;
};

/**
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  for(let i = this.nums.length - 1; i > 0; i--){
      let rand = Math.floor(Math.random() * (i + 1));
      let temp = this.nums[i];
      this.nums[i] = this.nums[rand];
      this.nums[rand] = temp;
  }
  return this.nums;

};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/
