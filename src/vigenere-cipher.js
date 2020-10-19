const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".repeat(2)
  constructor(bool) {
    this.isDirect = bool || bool === undefined ? true : false;
  }

  returnResult(result) {
    if (this.isDirect) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }
  encrypt(str, key) {
    if (str && key) {
      let fullStr = str.toUpperCase().split(' ').filter(item => item.charCodeAt() >= 65 && item.charCodeAt() <= 90).join('')
      let fullKey = key.toUpperCase().split(' ').join('')

      let longest = Math.max(fullStr.length, key.length)
      if (longest === fullStr.length) {
        fullKey = fullKey.repeat(26).substring(0, longest)
      } else {
        fullStr = fullStr.repeat(26).substring(0, longest)
      }
      let position = 0
      let res = ''
      for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
          res += this.alph[this.alph.indexOf(fullStr[position]) + this.alph.indexOf(fullKey[position])]
          position += 1
        } else {
          res += str[i]
        }
      }
      return this.returnResult(res)
    } else throw new Error()
  }
  decrypt(str, key) {
    if (str && key) {
      let fullStr = str.toUpperCase().split(' ').join('')
      let fullKey = key.toUpperCase()

      let longest = Math.max(fullStr.length, key.length)
      if (longest === fullStr.length) {
        fullKey = fullKey.repeat(26).substring(0, longest)
      } else {
        fullStr = fullStr.repeat(26).substring(0, longest)
      }
      let position = 0
      let res = ''
      for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
          res += this.alph[this.alph.indexOf(fullStr[position]) + 26 - this.alph.indexOf(fullKey[position])]
          position += 1
        } else {
          res += str[i]
        }
      }
      return this.returnResult(res)
    } else throw new Error()
  }
}


// 'ATTACKATDAWN'
// 'LEMONLEMONLE'



module.exports = VigenereCipheringMachine;
let strSecr = '21'

// let res = strSecr.split('').map((item, index) => {
//   if(item === ' ' && item === str[index]) {
//     return item + ' ' 
//   } else return item
// })