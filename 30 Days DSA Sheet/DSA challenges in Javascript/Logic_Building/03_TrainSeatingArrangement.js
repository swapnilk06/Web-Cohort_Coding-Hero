// You just need to implement the findUniqueNumber function
function findUniqueNumber(nums) {
  let unique = 0;
  for (let num of nums) {
    unique ^= num; // unique = unique ^ num
      // 0^0 and 1^1 => '0' & remain as '1'
      // 1st -> 0 ^ 2 = 2 // unique become as 2
      // 2nd -> 2 ^ 2 = 0  // both are same then cancel
      // 3rd -> 0 ^ 1 = 1 // unique become as 1

  }
  return unique;
}

console.log(findUniqueNumber([2,2,1])); // Output: 1
