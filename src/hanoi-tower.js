const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const moves = Math.pow(2, disksNumber) - 1
  const time = Math.floor(moves / (turnsSpeed / 3600))
  return {
    turns: moves,
    seconds: time
  }
};
