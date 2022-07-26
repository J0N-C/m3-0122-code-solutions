/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let first = queue.dequeue();
  if (first === undefined) return first;
  let test = queue.peek();
  if (test === undefined) return first;
  while (test < first) {
    queue.enqueue(first);
    first = queue.dequeue();
    test = queue.peek();
  }
  return first;
}
