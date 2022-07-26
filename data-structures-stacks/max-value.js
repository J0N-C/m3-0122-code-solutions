/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    const test = stack.pop();
    if (test > max) max = test;
  }
  return max;
}
