/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const first = list;
  const back = list.next.next;
  list = list.next;
  first.next = back;
  list.next = first;
  return list;
}
