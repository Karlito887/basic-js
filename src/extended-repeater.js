const CustomError = require("../extensions/custom-error");

module.exports = 
function repeater(str, 
  {repeatTimes = 1, separator = '+', addition = '', 
  additionRepeatTimes = 1, additionSeparator = '|' }) {
    let mainSep = (addition + additionSeparator).repeat(additionRepeatTimes) 
    let mainStr = (str + mainSep.substring(0, mainSep.length - additionSeparator.length) + separator).repeat(repeatTimes)
    return mainStr.substring(0, mainStr.length - separator.length)
};
  

// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) => 
// 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'