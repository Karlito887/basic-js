const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error()
  const resaultArr = [...arr]
  for(let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev' :
        resaultArr[i] = undefined
        resaultArr[i - 1] = undefined
        break
      case '--discard-next' :
        resaultArr[i] = undefined
        resaultArr[i + 1]  = undefined
        break
      case '--double-prev' :
          resaultArr[i] = resaultArr[i - 1]
        break
      case '--double-next' :
        resaultArr[i] = resaultArr[i + 1]
        break
    }
  }
  return resaultArr.filter(item => item !== undefined)
};
