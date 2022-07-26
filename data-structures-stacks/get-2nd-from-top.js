/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const first = stack.pop();
  const second = stack.pop();
  if (second !== undefined) stack.push(second);
  if (first !== undefined) stack.push(first);
  return second;
}
