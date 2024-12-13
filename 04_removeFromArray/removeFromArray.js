const removeFromArray = function (array, ...args) {
  for (const arg of args) { // loop through the args
    while (array.includes(arg)) { // loop through the array
      let index = array.indexOf(arg); // get the index of the arg
      array.splice(index, 1); // remove the arg based on its index
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
