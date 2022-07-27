/* exported includes */

function includes(list, value) {
  let current = list;
  while (current.next && current.data !== value) {
    current = current.next;
  }
  return current.data === value;
}
