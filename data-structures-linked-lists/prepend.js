/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const first = new LinkedList(value);
  first.next = list;
  return first;
}
