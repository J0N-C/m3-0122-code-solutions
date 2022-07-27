/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return;
  let current = list;
  while (current.next.next) {
    current = current.next;
  }
  current.next = null;
}
