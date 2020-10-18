const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chainLength: 0,
  chain: [],

  getLength() {
    return this.chainLength
  },
  addLink(value) {
    this.chain.push(value)
    this.chainLength += 1
    return this
  },
  removeLink(position) {
    debugger
    if (!Number.isInteger(position)
      || this.chain.findIndex((item, index) => index === position - 1) === -1) {
        this.chain = []
        this.chainLength = 0
        throw new Error()
    }
    this.chain.splice(position - 1, 1)
    this.chainLength -= 1
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let res = this.chain.map((item, index) => {
      if (index === 0) return `( ${item} )`
      return `~~( ${item} )`
    }).join('')
    this.chain = []
    this.chainLength = 0
    return res

  }
};

module.exports = chainMaker;
