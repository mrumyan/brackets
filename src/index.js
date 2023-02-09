module.exports = function check(str, bracketsConfig) {
  let bracketsStack = [];
  const ourBrackets = Object.fromEntries(bracketsConfig);

  for (let bracket of str) {
    let last = bracketsStack[bracketsStack.length - 1];
    if (bracket in ourBrackets && bracket !== ourBrackets[last]) {
      bracketsStack.push(bracket);
    } else if (bracket !== ourBrackets[bracketsStack.pop()]) {
      return false;
    }
  }

  return !bracketsStack.length;
}
