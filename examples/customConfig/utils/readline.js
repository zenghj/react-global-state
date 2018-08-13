const readline = require('readline');

module.exports = function getReadLine() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.rlquestion = function rlquestion(question) {
    return new Promise((resolve, reject) => {
      rl.question(question, answer => {
        console.log('answer', answer)
        resolve(answer);
      })
    })
  }
  return rl;
}