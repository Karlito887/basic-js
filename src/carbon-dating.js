const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string' || sampleActivity === NaN || !sampleActivity || +sampleActivity < 1 || +sampleActivity > 15) {
    return false
  } else {
    let num = sampleActivity.split('').filter((item, index) => {
      if(item === '.' && index > 3) return false
      return true
    }).join('')
    let res = Math.ceil(Math.log(MODERN_ACTIVITY / +num) / (0.693/HALF_LIFE_PERIOD))
    if(isNaN(res)) return false
    return res
  }
};
