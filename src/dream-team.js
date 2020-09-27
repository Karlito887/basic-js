const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)) {
    return members.filter(member => typeof member === 'string')
      .map(item => item.toUpperCase().trim()[0]).sort().join('')
  }
  return false
};
