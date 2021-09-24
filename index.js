function hasTargetSum(array, target) {
  //Find if target is one of the elements in the array.
  if (array.find(element => element === target)) {
    //console.log('Target is in array.');
    return true;
  } else {
    for (let integer of array) {
      //Subtract the integer from the target.
      let search = target - array[integer];
      //console.log(search)
      //Filter through array, returning all numbers except the current integer.
      const filtered = array.filter(num => num !== array[integer]);
      if (filtered.find(element => element === search)) {
        return true;
      }
    }
    return false;
  }
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here:

  Find if target is one of the elements in the array:
    If not:
  Iterate through the array:
    Subtract the integer from the target.
    Filter through array, returning all numbers except the current integer.
    Find an integer that matches the subtracted value of the integer and target.
      Return true.
    if not:
      Return false. 
*/

/*
  Add written explanation of your solution here:

  1) First use the find() method to search through the array, looking for an element that matches the target. If yes return true.

  2) If no target match is found, iterate through the array:
      On each iteration, subtract the integer from the target and assign it to a value.
      Filter through the array, returning all numbers in the array that do not equal the current integer.
      Use the find() method to locate an element in the filtered array that equals the subtracted value.

  3) If a match is found, the algorithm returns true and if no matches are found the algorithm returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here:
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 4, 12, 5], 9));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 7, 2, 15, 11, 14], 10));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
