// const repeatString = (str, num) => {
//     if (num < 0) return 'ERROR';
//     return str.repeat(num);
//   };
  
//   module.exports = repeatString;

// ------OR------
const repeatString = (str, num) => {
    if (num < 0) return 'ERROR';
    if (num === 0) return '';
    let result = '';
    for (let i = 0; i < num; i++) {
      result += str;
    }
    return result;
  };

  module.exports = repeatString;