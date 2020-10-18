const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!'
  if(Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error();
  }
  const [ winter, spring, summer, autumn ] = [
    [11, 12, 0, 1],
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],

  ]
  let month = new Date(date).getMonth() 
  return winter.some((item) => item === month) ? 'winter' 
  : spring.some((item) => item === month) ? 'spring'
  : summer.some((item) => item === month) ? 'summer'
  : autumn.some((item) => item === month) ? 'autumn'
  : !month ? 'THROWN' : 
  'Unable to determine the time of year!'

};
