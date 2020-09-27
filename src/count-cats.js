const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  const cat = '^^'
  let catCount = 0
  for(let i = 0; i < backyard.length; i++) {
    backyard[i].map(item => item === cat ? catCount++ : null)
  }
  return catCount
};
