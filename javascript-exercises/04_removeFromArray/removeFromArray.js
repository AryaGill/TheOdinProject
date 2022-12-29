const removeFromArray = (arr, ...valuesToRemove) => {
    return arr.filter(val => !valuesToRemove.includes(val));
  };

// Do not edit below this line
module.exports = removeFromArray;
