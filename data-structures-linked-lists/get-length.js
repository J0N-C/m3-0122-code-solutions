/* exported getLength */

function getLength(list) {
  let counter = 1;
  let current = list;
  while (current.next) {
    current = current.next;
    counter++;
  }
  return counter;
}
