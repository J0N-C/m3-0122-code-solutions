/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const back = list.next;
  list.next = new LinkedList(value);
  list.next.next = back;
}
